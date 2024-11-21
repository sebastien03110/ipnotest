import { p as processArticle } from '../../chunks/articles_BMNRa0NR.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request, redirect }) => {
  try {
    const formData = await request.formData();
    const url = formData.get("url")?.toString();
    const title = formData.get("title")?.toString();
    const description = formData.get("description")?.toString();
    const category = formData.get("category")?.toString();
    if (!url || !title || !description || !category) {
      return redirect("/?error=missing-fields");
    }
    await processArticle(url, title, description, category);
    return redirect("/?success=true");
  } catch (error) {
    console.error("Erreur lors de l'ajout:", error);
    return redirect("/?error=processing");
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
