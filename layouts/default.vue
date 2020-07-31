<template>
  <div :class="['bg-gray-200', {'gradient': !isNavbarStatic, 'text-white': !isNavbarStatic}]">
    <AppNavbar :isStatic="isNavbarStatic" />

    <nuxt />

    <LazyAppFooter />
  </div>
</template>

<script>
export default {
  data: () => ({
    isNavbarStatic: false,
  }),
  // Stupid hack better to handle it in a navbar itself
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        this.isNavbarStatic = to.path !== "/";
      },
    },
  },
};
</script>

<style>
.gradient {
  background: linear-gradient(90deg, #192c44 0%, #41c59e 100%);
}
</style>

