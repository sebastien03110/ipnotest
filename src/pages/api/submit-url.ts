import type { APIRoute } from 'astro';
import { processArticle } from '../../lib/articles';

export const POST: APIRoute = async ({ request, redirect }) => {
  try {
    const formData = await request.formData();
    const url = formData.get('url')?.toString();
    const title = formData.get('title')?.toString();
    const description = formData.get('description')?.toString();
    const category = formData.get('category')?.toString();

    if (!url || !title || !description || !category) {
      return redirect('/?error=missing-fields');
    }

    await processArticle(url, title, description, category);
    return redirect('/?success=true');

  } catch (error) {
    console.error('Erreur lors de l\'ajout:', error);
    return redirect('/?error=processing');
  }
};