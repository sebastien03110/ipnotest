import { a as articleExists, d as deleteArticle } from '../../../chunks/articles_BMNRa0NR.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ params, redirect }) => {
  try {
    const { slug } = params;
    if (!slug) {
      return redirect("/?error=missing-slug");
    }
    const exists = await articleExists(slug);
    if (!exists) {
      return redirect("/?error=article-not-found");
    }
    await deleteArticle(slug);
    return redirect("/?success=article-deleted");
  } catch (error) {
    console.error("Erreur lors de la suppression:", error);
    return redirect("/?error=delete-failed");
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
