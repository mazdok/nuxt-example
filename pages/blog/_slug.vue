<template>
  <article class="pt-24 mx-auto">
    <h1>{{ blog.title }}</h1>
    <p>{{ blog.description }}</p>
    <img :src="blog.img" :alt="blog.alt" />
    <p>Blog last updated: {{ formatDate(blog.updatedAt) }}</p>

    <nuxt-content :document="blog" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const blog = await $content("blogs", params.slug).fetch();

    console.error(blog);
    return { blog };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>
