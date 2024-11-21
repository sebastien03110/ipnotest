import fetch from 'node-fetch';
import Parser from 'rss-parser';
import TurndownService from 'turndown';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';
import cheerio from 'cheerio';

const parser = new Parser();
const turndownService = new TurndownService();

// Sources de veille
const sources = [
  {
    name: 'Conseil Supérieur du Notariat',
    url: 'https://www.notaires.fr/fr/rss/actualites',
    type: 'rss'
  },
  {
    name: 'La Semaine Juridique Notariale',
    url: 'https://www.lexis360.fr/rss/JCN',
    type: 'rss'
  }
];

async function ensureDirectoryExists(path) {
  if (!existsSync(path)) {
    await mkdir(path, { recursive: true });
  }
}

async function fetchArticles() {
  const articles = [];

  for (const source of sources) {
    try {
      if (source.type === 'rss') {
        const response = await fetch(source.url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const xml = await response.text();
        const feed = await parser.parseString(xml);
        
        for (const item of feed.items) {
          if (isRelevantArticle(item.title, item.content)) {
            const article = {
              title: cleanText(item.title),
              description: cleanText(extractDescription(item.content)),
              category: determineCategory(item.title, item.content),
              date: new Date(item.pubDate),
              author: cleanText(item.author || source.name),
              content: cleanText(turndownService.turndown(item.content)),
              source: source.name
            };
            articles.push(article);
          }
        }
      }
    } catch (error) {
      console.error(`Erreur lors de la récupération depuis ${source.name}:`, error);
    }
  }

  return articles;
}

function cleanText(text) {
  return text
    .replace(/"/g, '\\"')
    .replace(/\n/g, ' ')
    .trim();
}

function isRelevantArticle(title, content) {
  const keywords = [
    'patrimoine', 'notaire', 'succession', 'fiscalité', 'immobilier',
    'gestion patrimoniale', 'transmission', 'donation', 'testament'
  ];

  const text = `${title} ${content}`.toLowerCase();
  return keywords.some(keyword => text.includes(keyword.toLowerCase()));
}

function extractDescription(content) {
  if (!content) return '';
  const $ = cheerio.load(content);
  const text = $.text().trim();
  return text.length > 200 ? text.slice(0, 197) + '...' : text;
}

function determineCategory(title, content) {
  const categories = {
    'Fiscalité': ['fiscal', 'impôt', 'taxe'],
    'Succession': ['succession', 'hérit', 'testament'],
    'Gestion patrimoniale': ['patrimoine', 'gestion', 'stratégie'],
    'Immobilier': ['immobilier', 'bien', 'propriété']
  };

  const text = `${title} ${content}`.toLowerCase();
  
  for (const [category, keywords] of Object.entries(categories)) {
    if (keywords.some(keyword => text.includes(keyword.toLowerCase()))) {
      return category;
    }
  }

  return 'Gestion patrimoniale';
}

async function saveArticle(article) {
  try {
    const slug = article.title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

    const content = `---
title: "${article.title}"
description: "${article.description}"
category: "${article.category}"
date: ${article.date.toISOString().split('T')[0]}
author: "${article.author}"
source: "${article.source}"
---

${article.content}`;

    const articlesDir = join(process.cwd(), 'src', 'content', 'articles');
    await ensureDirectoryExists(articlesDir);
    
    const filePath = join(articlesDir, `${slug}.md`);
    await writeFile(filePath, content, 'utf-8');
    return true;
  } catch (error) {
    console.error('Erreur lors de la sauvegarde de l\'article:', error);
    return false;
  }
}

async function updateArticles() {
  try {
    console.log('Début de la mise à jour des articles...');
    const articles = await fetchArticles();
    
    if (articles.length === 0) {
      console.log('Aucun nouvel article trouvé');
      return { success: true, message: 'Aucun nouvel article à ajouter' };
    }
    
    console.log(`${articles.length} nouveaux articles trouvés`);
    
    const savedArticles = await Promise.all(
      articles.map(article => saveArticle(article))
    );
    
    const successCount = savedArticles.filter(Boolean).length;
    
    if (successCount === 0) {
      throw new Error('Aucun article n\'a pu être sauvegardé');
    }
    
    console.log(`${successCount} articles sauvegardés avec succès`);
    return { 
      success: true, 
      message: `${successCount} articles mis à jour avec succès` 
    };
  } catch (error) {
    console.error('Erreur lors de la mise à jour:', error);
    return { 
      success: false, 
      message: error.message || 'Erreur lors de la mise à jour des articles' 
    };
  }
}

updateArticles();