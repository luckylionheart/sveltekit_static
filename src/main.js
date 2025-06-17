import App from './App.svelte';
import { createRouter } from 'svelte-pathfinder';

const router = createRouter({
  base: '/',
  useHash: true,
  routes: [
    { path: '/', component: () => import('./pages/Home.svelte') },
    { path: '/login', component: () => import('./pages/Login.svelte') },
  ]
});

new App({
  target: document.getElementById('app'),
  props: { router }
});
