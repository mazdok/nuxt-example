<template>
  <div class="font-sans flex justify-between content-center px-4 pb-12">
    <div v-if="prev" class="text-left">
      <span class="text-xs md:text-sm font-normal text-gray-600">&lt; Previous Post</span>
      <br />
      <p>
        <nuxt-link
          :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
          class="break-normal text-base md:text-sm text-teal-500 font-bold no-underline hover:underline"
        >{{prev.title}}</nuxt-link>
      </p>
    </div>
    <div v-if="next" class="text-right">
      <span class="text-xs md:text-sm font-normal text-gray-600">Next Post &gt;</span>
      <br />
      <p>
        <nuxt-link
          :to="{ name: 'blog-slug', params: { slug: next.slug } }"
          class="break-normal text-base md:text-sm text-teal-500 font-bold no-underline hover:underline"
        >{{next.title}}</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    next: Object,
    prev: Object,
  },
};
</script>
