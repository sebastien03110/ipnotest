async function processArticle(url, title, description, category) {
  try {
    const validUrl = new URL(url);
    if (!validUrl.protocol.startsWith("http")) {
      throw new Error("Invalid protocol. Use HTTP or HTTPS.");
    }
    const slug = createSlug(title);
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    const content = `---
title: "${title}"
description: "${description}"
category: "${category}"
date: "${today}"
author: "Veille IPNOT"
source: "${url}"
---

Source originale : ${url}

Contenu en cours de traitement...`;
    return { success: true };
  } catch (error) {
    console.error("Error processing article:", error);
    throw error;
  }
}
function createSlug(title) {
  return title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
async function deleteArticle(slug) {
  const response = await fetch(`/api/articles/${slug}`, {
    method: "DELETE"
  });
  if (!response.ok) {
    throw new Error("Failed to delete article");
  }
}
async function articleExists(slug) {
  try {
    const response = await fetch(`/api/articles/${slug}`);
    return response.ok;
  } catch {
    return false;
  }
}

export { articleExists as a, deleteArticle as d, processArticle as p };
