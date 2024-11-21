import { p as processArticle } from '../../chunks/articles_BMNRa0NR.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const { url } = await request.json();
    try {
      new URL(url);
    } catch {
      return new Response(JSON.stringify({
        success: false,
        message: "URL invalide"
      }), { status: 400 });
    }
    await processArticle(url);
    return new Response(JSON.stringify({
      success: true,
      message: "Article ajouté avec succès"
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Erreur:", error);
    return new Response(JSON.stringify({
      success: false,
      message: error instanceof Error ? error.message : "Erreur lors de l'ajout de l'article"
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
