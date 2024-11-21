import type { APIRoute } from 'astro';
import { promises as fs } from 'fs';
import { join } from 'path';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { slug } = await request.json();
    
    if (!slug) {
      return new Response(JSON.stringify({
        success: false,
        message: 'Slug requis'
      }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const filePath = join(process.cwd(), 'src', 'content', 'articles', `${slug}.md`);
    
    try {
      await fs.unlink(filePath);
      
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
        message: 'Article non trouvé'
      }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  } catch (error) {
    console.error('Erreur:', error);
    return new Response(JSON.stringify({
      success: false,
      message: 'Erreur lors de la suppression'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};