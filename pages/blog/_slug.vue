<template>
  <!--Container-->
  <div class="container w-full md:max-w-3xl mx-auto pt-20">
    <div
      class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal"
      style="font-family:Georgia,serif;"
    >
      <!--Title-->
      <div class="font-sans">
        <span class="text-base md:text-sm text-teal-500 font-bold">&lt;</span>
        <nuxt-link
          to="/blog"
          class="text-base md:text-sm text-teal-500 font-bold no-underline hover:underline"
        >BACK TO BLOG</nuxt-link>
        <h1
          class="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl"
        >{{blog.title}}</h1>
        <p
          class="text-sm md:text-base font-normal text-gray-600"
        >Published {{formatDate(blog.date)}}</p>
      </div>

      <!--Post Content-->
      <nuxt-content :document="blog" class="py-6" />
      <!--/ Post Content-->
    </div>

    <!--Divider-->
    <hr class="border-b-2 border-gray-400 mb-8 mx-4" />

    <!--Subscribe-->
    <LazySubscribeBanner />
    <!-- /Subscribe-->

    <!--Author-->
    <LazyBlogAuthor />
    <!--/Author-->

    <!--Divider-->
    <hr class="border-b-2 border-gray-400 mb-8 mx-4" />

    <!--Next & Prev Links-->
    <LazyNextPrevLinks :next="next" :prev="prev" />
    <!--/Next & Prev Links-->
  </div>
  <!--/container-->
</template>

<script>
import { formatDate } from "@/helpers/utils.js";

export default {
  async asyncData({ $content, params }) {
    const blog = await $content("blog", params.slug).fetch();

    const [prev, next] = await $content("blog")
      .only(["title", "slug"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();

    // console.error("blog", blog);
    return { blog, prev, next };
  },
  methods: {
    formatDate(date) {
      return formatDate(date);
    },
  },
};
</script>

<style lang="postcss">
.nuxt-content blockquote {
  @apply border-l-4 border-teal-500 italic my-8 pl-8;
}

.nuxt-content p {
  @apply mb-4;
}

.nuxt-content a {
  @apply text-teal-500;
}
</style>
