import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter(),
    paths: {
      base: '/sveltekit_static', // 🔁 Replace with your GitHub repo name
    },
    prerender: {
      entries: ['*']
    }
  }
};
