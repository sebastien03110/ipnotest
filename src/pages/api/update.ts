import type { APIRoute } from 'astro';
import { processArticle } from '../../lib/articles';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { url } = await request.json();

    // Valider l'URL
    try {
      new URL(url);
    } catch {
      return new Response(JSON.stringify({
        success: false,
        message: 'URL invalide'
      }), { status: 400 });
    }

    // Traiter l'article
    await processArticle(url);

    return new Response(JSON.stringify({
      success: true,
      message: 'Article ajouté avec succès'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Erreur:', error);
    return new Response(JSON.stringify({
      success: false,
      message: error instanceof Error ? error.message : 'Erreur lors de l\'ajout de l\'article'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};