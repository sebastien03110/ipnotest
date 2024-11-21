import type { APIRoute } from 'astro';
import { deleteArticle, articleExists } from '../../../lib/articles';

export const DELETE: APIRoute = async ({ params }) => {
  try {
    const { slug } = params;
    
    if (!slug) {
      return new Response(JSON.stringify({
        success: false,
        message: 'Identifiant de l\'article manquant'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Vérifier si l'article existe
    const exists = await articleExists(slug);
    if (!exists) {
      return new Response(JSON.stringify({
        success: false,
        message: 'Article non trouvé'
      }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Supprimer l'article
    await deleteArticle(slug);
    
    return new Response(JSON.stringify({
      success: true,
      message: 'Article supprimé avec succès'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Erreur lors de la suppression:', error);
    return new Response(JSON.stringify({
      success: false,
      message: 'Erreur lors de la suppression de l\'article'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};