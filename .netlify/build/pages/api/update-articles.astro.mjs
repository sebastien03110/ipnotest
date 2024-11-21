import { exec } from 'child_process';
import { promisify } from 'util';
export { renderers } from '../../renderers.mjs';

const execAsync = promisify(exec);

async function post() {
  try {
    await execAsync('npm run update-articles');
    
    return new Response(JSON.stringify({
      success: true,
      message: 'Articles mis à jour avec succès'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      message: 'Erreur lors de la mise à jour des articles',
      error: error.message
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  post
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
