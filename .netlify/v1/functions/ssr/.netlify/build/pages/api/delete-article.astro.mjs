import { promises } from 'fs';
import { join } from 'path';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const { slug } = await request.json();
    if (!slug) {
      return new Response(JSON.stringify({
        success: false,
        message: "Slug requis"
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const filePath = join(process.cwd(), "src", "content", "articles", `${slug}.md`);
    try {
      await promises.unlink(filePath);
      return new Response(JSON.stringify({
        success: true,
        message: "Article supprimé avec succès"
      }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    } catch (error) {
      console.error("Erreur lors de la suppression:", error);
      return new Response(JSON.stringify({
        success: false,
        message: "Article non trouvé"
      }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }
  } catch (error) {
    console.error("Erreur:", error);
    return new Response(JSON.stringify({
      success: false,
      message: "Erreur lors de la suppression"
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
