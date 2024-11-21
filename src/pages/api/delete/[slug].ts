import type { APIRoute } from 'astro';
import { deleteArticle, articleExists } from '../../../lib/articles';

export const POST: APIRoute = async ({ params, redirect }) => {
  try {
    const { slug } = params;
    if (!slug) {
      return redirect('/?error=missing-slug');
    }

    // Vérifier si l'article existe
    const exists = await articleExists(slug);
    if (!exists) {
      return redirect('/?error=article-not-found');
    }

    await deleteArticle(slug);
    return redirect('/?success=article-deleted');
  } catch (error) {
    console.error('Erreur lors de la suppression:', error);
    return redirect('/?error=delete-failed');
  }
};