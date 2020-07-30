<template>
  <div class="gradient leading-normal tracking-normal text-white">
    <Navbar />

    <nuxt />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
.gradient {
  background: linear-gradient(90deg, #192c44 0%, #41c59e 100%);
}
</style>

