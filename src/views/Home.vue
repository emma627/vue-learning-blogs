<template>
  <div class="Home">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layoutOfTwo">
      <div>
        <PostsList :posts="posts" />
      </div>
      <div class="allTagsBeside">
        <AllTags :posts="posts" />
      </div>
    </div>
  </div>
</template>

<script>
import getPosts from "../composables/getPosts";
import PostsList from "../components/PostsList";
import AllTags from "../components/AllTags";

export default {
  name: "Home",
  components: {
    PostsList,
    AllTags,
  },
  setup() {
    const { posts, error, loadPosts } = getPosts();

    loadPosts();
    console.log(posts);
    return { posts, error };
  },
};
</script>

<style>
.layoutOfTwo {
  display: grid;
  grid-template-columns: 3fr 1fr;
}
.allTags {
  margin: 40px;
}
</style>
