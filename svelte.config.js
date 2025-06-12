import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
       fallback: 'index.html'
    }),
    paths: {
      base: '/sveltekit_static',
    },
    prerender: {
      entries: ['/sveltekit_static'] // 👈 Add this
    }
  }
};
