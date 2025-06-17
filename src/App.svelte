<script>
  export let router;
</script>

<nav>
  <a href="#/">Home</a>
  <a href="#/login">Login</a>
</nav>

<svelte:component this={router.component} {...router.params} />
