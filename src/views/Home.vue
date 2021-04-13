<template>
  <div class="home">
    <div v-if="error">{{ error }}</div>
    <div v-if="blogs.length">
      <BlogsList :blogs="blogs" />
    </div>
  </div>
</template>

<script>

import getBlogs from "../composables/getBlogs";
import BlogsList from "../components/BlogsList";
export default {
  name: "Home",
  components: {
    BlogsList,
  },
  setup() {
    const { blogs, error, loadBlogs } = getBlogs();

    loadBlogs();
    console.log(blogs);
    return { blogs, error };
  },
};
</script>
