import type { APIRoute } from 'astro';
import { updateArticles } from '../../scripts/updateArticles';

export const POST: APIRoute = async () => {
  try {
    const result = await updateArticles();
    
    return new Response(JSON.stringify(result), {
      status: result.success ? 200 : 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Erreur lors de la mise à jour:', error);
    return new Response(JSON.stringify({
      success: false,
      message: 'Erreur lors de la mise à jour des articles',
      error: error instanceof Error ? error.message : 'Erreur inconnue'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};