import { join } from 'path';

export async function processArticle(url: string, title: string, description: string, category: string) {
  try {
    // Validate URL
    const validUrl = new URL(url);
    if (!validUrl.protocol.startsWith('http')) {
      throw new Error('Invalid protocol. Use HTTP or HTTPS.');
    }

    const slug = createSlug(title);
    const today = new Date().toISOString().split('T')[0];
    
    const content = `---
title: "${title}"
description: "${description}"
category: "${category}"
date: "${today}"
author: "Veille IPNOT"
source: "${url}"
---

Source originale : ${url}

Contenu en cours de traitement...`;

    return { success: true };
  } catch (error) {
    console.error('Error processing article:', error);
    throw error;
  }
}

function createSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export async function deleteArticle(slug: string): Promise<void> {
  const response = await fetch(`/api/articles/${slug}`, {
    method: 'DELETE'
  });
  
  if (!response.ok) {
    throw new Error('Failed to delete article');
  }
}

export async function articleExists(slug: string): Promise<boolean> {
  try {
    const response = await fetch(`/api/articles/${slug}`);
    return response.ok;
  } catch {
    return false;
  }
}