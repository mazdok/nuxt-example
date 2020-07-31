<template>
  <div class="max-w-screen-lg mx-auto pt-24">
    <!-- header -->
    <header class="flex items-center justify-between flex-col py-2 mb-12">
      <h1 class="w-full my-2 mb-6 text-6xl font-bold leading-tight text-center">Blog</h1>

      <div class="relative text-gray-600 w-full max-w-xl">
        <SearchInput v-model="searchQuery" />
      </div>
    </header>
    <!-- header ends here -->

    <main>
      <p v-if="!blogs.length" class="text-center text-xl">No results... 🙁</p>

      <!-- featured section -->
      <div v-else class="flex flex-wrap md:flex-no-wrap space-x-0 md:space-x-6 mb-16">
        <!-- main post -->
        <NuxtLink
          :to="{ name: 'blog-slug', params: { slug: featuredPost.slug } }"
          class="w-full"
          tag="div"
        >
          <div class="mb-4 lg:mb-0 p-4 lg:p-0 w-full md:w-4/7 relative rounded block">
            <img
              src="https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
              class="rounded-md object-cover w-full h-64"
            />
            <span class="text-green-700 text-sm hidden md:block mt-4">{{featuredPost.author}}</span>
            <h1
              class="text-gray-800 text-4xl font-bold mt-2 mb-2 leading-tight"
            >{{featuredPost.title}}</h1>
            <p class="text-gray-600 mb-4">{{featuredPost.description}}</p>
            <nuxt-link
              :to="{ name: 'blog-slug', params: { slug: featuredPost.slug } }"
              class="inline-block px-6 py-3 mt-2 rounded-md bg-green-700 text-gray-100"
            >Read more</nuxt-link>
          </div>
        </NuxtLink>

        <!-- sub-main posts -->
        <div class="w-full md:w-4/7">
          <template v-for="article of blogs.slice(1, 4)">
            <NuxtLink
              :to="{ name: 'blog-slug', params: { slug: article.slug } }"
              :key="article.slug"
              class="w-full"
            >
              <div class="rounded w-full flex flex-col md:flex-row mb-10">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                  class="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
                />
                <div class="bg-white rounded px-4 flex-1">
                  <span class="text-gray-400 text-sm hidden md:block">{{formatDate(article.date)}}</span>
                  <div class="md:mt-0 text-gray-800 font-semibold text-xl mb-2">{{article.title}}</div>
                  <p
                    class="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600"
                  >{{article.description}}</p>
                </div>
              </div>
            </NuxtLink>
          </template>
        </div>
      </div>
      <!-- end featured section -->

      <!-- recent posts -->
      <div class="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
        <h2 class="font-bold text-3xl">Latest news</h2>
        <a
          class="bg-gray-200 hover:bg-green-200 text-gray-800 px-3 py-1 rounded cursor-pointer"
        >View all</a>
      </div>
      <div class="block space-x-0 lg:flex lg:space-x-6">
        <div class="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
          <img
            src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
            class="rounded"
            alt="technology"
          />
          <div class="p-4 pl-0">
            <h2
              class="font-bold text-2xl text-gray-800"
            >Put all speaking her delicate recurred possible.</h2>
            <p class="text-gray-700 mt-2">
              Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions.
              So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.
            </p>

            <a href="#" class="inline-block py-2 rounded text-green-900 mt-2 ml-auto">Read more</a>
          </div>
        </div>

        <div class="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
          <img
            src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
            class="rounded"
            alt="technology"
          />
          <div class="p-4 pl-0">
            <h2
              class="font-bold text-2xl text-gray-800"
            >Is at purse tried jokes china ready decay an.</h2>
            <p class="text-gray-700 mt-2">
              Small its shy way had woody downs power. To denoting admitted speaking learning my exercise so in.
              Procured shutters mr it feelings. To or three offer house begin taken am at.
            </p>

            <a href="#" class="inline-block py-2 rounded text-green-900 mt-2 ml-auto">Read more</a>
          </div>
        </div>

        <div class="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
          <img
            src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
            class="rounded"
            alt="technology"
          />
          <div class="p-4 pl-0">
            <h2
              class="font-bold text-2xl text-gray-800"
            >As dissuade cheerful overcame so of friendly he indulged unpacked.</h2>
            <p class="text-gray-700 mt-2">
              Alteration connection to so as collecting me.
              Difficult in delivered extensive at direction allowance.
              Alteration put use diminution can considered sentiments interested discretion.
            </p>

            <a href="#" class="inline-block py-2 rounded text-green-900 mt-2 ml-auto">Read more</a>
          </div>
        </div>
      </div>
      <!-- end recent posts -->

      <!-- subscribe -->
      <LazySubscribeBanner />
      <!-- ens subscribe section -->

      <!-- popular posts -->
      <div class="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
        <h2 class="font-bold text-3xl">Popular news</h2>
        <a
          class="bg-gray-200 hover:bg-green-200 text-gray-800 px-3 py-1 rounded cursor-pointer"
        >View all</a>
      </div>
      <div class="block space-x-0 lg:flex lg:space-x-6">
        <div class="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
          <img
            src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
            class="rounded"
            alt="technology"
          />
          <div class="p-4 pl-0">
            <h2
              class="font-bold text-2xl text-gray-800"
            >Put all speaking her delicate recurred possible.</h2>
            <p class="text-gray-700 mt-2">
              Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions.
              So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.
            </p>

            <a href="#" class="inline-block py-2 rounded text-green-900 mt-2 ml-auto">Read more</a>
          </div>
        </div>

        <div class="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
          <img
            src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
            class="rounded"
            alt="technology"
          />
          <div class="p-4 pl-0">
            <h2
              class="font-bold text-2xl text-gray-800"
            >Is at purse tried jokes china ready decay an.</h2>
            <p class="text-gray-700 mt-2">
              Small its shy way had woody downs power. To denoting admitted speaking learning my exercise so in.
              Procured shutters mr it feelings. To or three offer house begin taken am at.
            </p>

            <a href="#" class="inline-block py-2 rounded text-green-900 mt-2 ml-auto">Read more</a>
          </div>
        </div>

        <div class="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
          <img
            src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
            class="rounded"
            alt="technology"
          />
          <div class="p-4 pl-0">
            <h2
              class="font-bold text-2xl text-gray-800"
            >As dissuade cheerful overcame so of friendly he indulged unpacked.</h2>
            <p class="text-gray-700 mt-2">
              Alteration connection to so as collecting me.
              Difficult in delivered extensive at direction allowance.
              Alteration put use diminution can considered sentiments interested discretion.
            </p>

            <a href="#" class="inline-block py-2 rounded text-green-900 mt-2 ml-auto">Read more</a>
          </div>
        </div>
      </div>
      <!-- end popular posts -->
    </main>
    <!-- main ends here -->
  </div>
</template>

<script>
import SubscribeBanner from "@/components/SubscribeBanner";
import { formatDate } from "@/helpers/utils.js";

export default {
  async asyncData({ $content }) {
    const blogs = await $content("blog").sortBy("createdAt", "asc").fetch();

    return {
      blogs,
    };
  },
  data: () => ({
    searchQuery: "",
    blogs: [],
  }),
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.$nuxt.refresh();
        return;
      }
      this.blogs = await this.$content("blog").search(searchQuery).fetch();
    },
  },
  computed: {
    featuredPost() {
      return this.blogs[0];
    },
  },
  methods: {
    formatDate(date) {
      return formatDate(date);
    },
  },
};
</script>
