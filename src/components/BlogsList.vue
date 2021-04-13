<template>
  <div class="blogsList">
    <div v-for="blog in blogs" :key="blog.id">
      <SingleBlog :blog="blog" />
    </div>
  </div>
</template>

<script>
import SingleBlog from "./SingleBlog";
export default {
  name: "BlogsList",
  props: ["blogs"],
  components: { SingleBlog },
};
</script>

<style></style>
