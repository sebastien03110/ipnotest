import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

let db;

async function initDB() {
  if (!db) {
    db = await open({
      filename: ':memory:', // Utilise une base de données en mémoire
      driver: sqlite3.Database
    });

    // Initialiser la base de données
    await db.exec(`
      CREATE TABLE IF NOT EXISTS pending_articles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        url TEXT NOT NULL UNIQUE,
        status TEXT DEFAULT 'pending',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);
  }
  return db;
}

export async function addPendingArticle(url: string) {
  const database = await initDB();
  try {
    await database.run('INSERT OR IGNORE INTO pending_articles (url) VALUES (?)', url);
    return { success: true };
  } catch (error) {
    console.error('Erreur lors de l\'ajout de l\'article:', error);
    return { success: false, error: error.message };
  }
}

export async function getPendingArticles() {
  const database = await initDB();
  return database.all('SELECT * FROM pending_articles WHERE status = "pending"');
}

export async function updateArticleStatus(id: number, status: string) {
  const database = await initDB();
  return database.run('UPDATE pending_articles SET status = ? WHERE id = ?', [status, id]);
}

export { initDB };