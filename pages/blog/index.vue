<template>
  <div class="pt-24">
    <section class="border-b py-8">
      <div class="container mx-auto flex flex-wrap pt-4 pb-8">
        <h1
          class="w-full my-2 mb-12 text-5xl font-bold leading-tight text-center text-gray-600"
        >Blog posts</h1>
      </div>

      <ul class="max-w-screen-sm mx-auto">
        <li v-for="article of blogs" :key="article.slug" class="bg-white rounded shadow-lg my-4 p-5">
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">

            <div class="overflow-hidden">
              <img class="w-full" src="https://picsum.photos/640/360" alt="Sunset in the mountains" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{{article.title}}</div>
                <p
                  class="text-gray-700 text-base"
                >{{article.description}}</p>
              </div>
              <p>{{article.author}}</p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const blogs = await $content("blog", params.slug)
      // .only(["title", "description", "img", "slug", "author"])
      .sortBy("createdAt", "asc")
      .fetch();

    return {
      blogs,
    };
  },
};
</script>
