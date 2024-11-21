import { a as articleExists, d as deleteArticle } from '../../../chunks/articles_BMNRa0NR.mjs';
export { renderers } from '../../../renderers.mjs';

const DELETE = async ({ params }) => {
  try {
    const { slug } = params;
    if (!slug) {
      return new Response(JSON.stringify({
        success: false,
        message: "Identifiant de l'article manquant"
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const exists = await articleExists(slug);
    if (!exists) {
      return new Response(JSON.stringify({
        success: false,
        message: "Article non trouvé"
      }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }
    await deleteArticle(slug);
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
      message: "Erreur lors de la suppression de l'article"
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
