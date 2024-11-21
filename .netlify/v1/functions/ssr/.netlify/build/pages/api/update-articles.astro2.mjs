export { renderers } from '../../renderers.mjs';

async function updateArticles() {
  try {
    const response = await fetch("/api/update-articles");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating articles:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Error updating articles"
    };
  }
}

const POST = async () => {
  try {
    const result = await updateArticles();
    return new Response(JSON.stringify(result), {
      status: result.success ? 200 : 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Erreur lors de la mise à jour:", error);
    return new Response(JSON.stringify({
      success: false,
      message: "Erreur lors de la mise à jour des articles",
      error: error instanceof Error ? error.message : "Erreur inconnue"
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
