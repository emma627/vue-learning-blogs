<template>
  <div class="home">
   <BlogsList :blogs="blogs"/>
  </div>
</template>

<script>
import getBlogs from "../composables/getBlogs"
import BlogsList from "../components/BlogsList"
export default {
  name: "Home",
  components: {
   BlogsList,
  },
  setup(){
    const {blogs, error,loadBlogs}=getBlogs()

    loadBlogs()
    console.log(blogs)
    return {blogs,error}
  }
};
</script>
