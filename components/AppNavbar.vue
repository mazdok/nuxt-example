<template>
  <!--Nav-->
  <nav
    id="header"
    :class="['fixed', 'w-full', 'z-30', 'top-0', 'text-white', {'is-static': isStatic}]"
  >
    <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
      <div class="pl-4 flex items-center">
        <nuxt-link
          class="brand text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
          to="/"
        >CashSentinel</nuxt-link>
      </div>

      <div class="block lg:hidden pr-4">
        <button id="nav-toggle" class="flex items-center p-1 text-orange-800 hover:text-gray-900">
          <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
        id="nav-content"
      >
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
          <li class="mr-3">
            <nuxt-link
              to="/"
              exact
              active-class="font-bold"
              class="inline-block py-2 px-4 text-black no-underline"
            >Home</nuxt-link>
          </li>
          <li class="mr-3">
            <nuxt-link
              to="/contacts"
              active-class="font-bold"
              class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
            >Contacts</nuxt-link>
          </li>
          <li class="mr-3">
            <nuxt-link
              to="/blog"
              active-class="font-bold"
              class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
            >Blog</nuxt-link>
          </li>
          <li class="mr-3">
            <nuxt-link
              v-for="locale in availableLocales"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
            >{{ locale.name }}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>

    <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
  </nav>
</template>

<script>
export default {
  props: {
    isStatic: Boolean,
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },
};
</script>

<style scoped lang="postcss">
nav.is-static {
  @apply bg-white shadow-sm;
}

nav.is-static .brand {
  @apply text-gray-800;
}
</style>
