// For static builds, we'll use client-side fetching instead
export async function updateArticles() {
  try {
    const response = await fetch('/api/update-articles');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating articles:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Error updating articles'
    };
  }
}