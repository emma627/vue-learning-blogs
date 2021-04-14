<template>
  <div class="Tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layoutOfTwo">
      <div>
        <PostsList :posts="postsWithTags" />
      </div>
      <div>
        <AllTags :posts="posts" />
      </div>
    </div>
  </div>
</template>

<script>
import AllTags from "@/components/AllTags";
import getPosts from "@/composables/getPosts";
import PostsList from "@/components/PostsList";

import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  name: "Tag",
  components: { PostsList, AllTags },
  setup() {
    const route = useRoute();
    const { posts, error, loadPosts } = getPosts();

    loadPosts();

    const postsWithTags = computed(() => {
      return posts.value.filter((item) => item.tags.includes(route.params.tag));
    });
    console.log()
    return { posts, error, postsWithTags };
  },
};
</script>

<style></style>
