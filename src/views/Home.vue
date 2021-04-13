<template>
  <div class="layoutHome">
    <div class="home">
      <div v-if="error">{{ error }}</div>
      <div v-if="blogs.length">
        <BlogsList :blogs="blogs" />
      </div>
    </div>
    <div class="allTagsBeside">
<AllTags />
    </div>
  </div>
</template>

<script>
import getBlogs from "../composables/getBlogs";
import BlogsList from "../components/BlogsList";
import AllTags from "../components/AllTags";

export default {
  name: "Home",
  components: {
    BlogsList,AllTags
  },
  setup() {
    const { blogs, error, loadBlogs } = getBlogs();

    loadBlogs();
    console.log(blogs);
    return { blogs, error };
  },
};
</script>

<style scoped>
.layoutHome{
  display:grid;
   grid-template-columns: 3fr 1fr;

}
.allTags{
  margin:40px;
}
</style>