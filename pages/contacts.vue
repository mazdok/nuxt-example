<template>
  <div class="pt-24">
    <section class="border-b py-8">
      <div class="container mx-auto flex flex-wrap pt-4 pb-8">
        <h1 class="w-full my-2 mb-6 text-6xl font-bold leading-tight text-center">Contact us</h1>

        <!--
          In order to make form actually work with Netlify CMS you need to add:
          - a data attribute
          - action method to a form
          - name attribute to each input
        -->
        <form
          class="w-full max-w-lg mx-auto bg-white p-8 rounded"
          action="POST"
          data-netlify="true"
        >
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >First Name</label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                name="name"
                placeholder="Jane"
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >Last Name</label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                name="surname"
                placeholder="Doe"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >E-mail</label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                name="email"
                type="email"
              />
              <p class="text-gray-600 text-xs italic">Some tips - as long as needed</p>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >Message</label>
              <textarea
                class="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                id="message"
                name="comment"
              ></textarea>
              <p
                class="text-gray-600 text-xs italic"
              >Re-size can be disabled by set by resize-none / resize-y / resize-x / resize</p>
            </div>
          </div>
          <div class="md:flex md:items-center">
            <div class="md:w-1/3">
              <button
                class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >Send</button>
            </div>
            <div class="md:w-2/3"></div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>
