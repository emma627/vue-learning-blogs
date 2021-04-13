<template>
  <div class="Details">
    <div v-if="error">{{ error }}</div>
    <div v-if="blog">
      <h2>{{ blog.title }}</h2>
      <p>{{ blog.content }}</p>
    </div>
  </div>
</template>

<script>
import getBlog from "@/composables/getBlog";
import { useRoute } from "vue-router";

export default {
  name: "Details",

  setup() {
    const route = useRoute();
    const { blog, error, loadBlog } = getBlog(route.params.id);

    loadBlog();
    return { blog, error };
  },
};
</script>

<style scoped>
.Details {
  margin: 50px 180px;
}
h2 {
  color: steelblue;
  font-size: 30px;
}
</style>
