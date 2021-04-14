<template>
  <div class="Details">
    <div v-if="error">{{ error }}</div>
    <div v-if="post">
      <h2>{{ post.title }}</h2>
      <p>{{ post.content }}</p>
    </div>
  
  </div>
</template>

<script>

import getPost from "@/composables/getPost";
import { useRoute } from "vue-router";

export default {
  name: "Details",
 
  setup() {
    const route = useRoute();
    const { post, error, loadPost } = getPost(route.params.id);

    loadPost();
    return { post, error };
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
