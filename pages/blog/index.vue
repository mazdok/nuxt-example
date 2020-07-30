<template>
  <div class="pt-24 px-6">
    <h1>Blog Posts</h1>
    <ul>
      <li v-for="article of blogs" :key="article.slug" class="bg-gray-200 rounded my-4 p-5">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <img :src="article.img" />
          <div class="text-gray-800">
            <h2>{{ article.title }}</h2>
            <p>by {{ article.author }}</p>
            <p>{{ article.description }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const blogs = await $content("blogs", params.slug)
      .only(["title", "description", "img", "slug", "author"])
      .sortBy("createdAt", "asc")
      .fetch();

    return {
      blogs,
    };
  },
};
</script>
