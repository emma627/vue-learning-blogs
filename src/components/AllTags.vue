<template>
  <div class="allTags">
    <h3>All Tags</h3>
    <div class="tagsList">
      <div v-for="tag in tags" :key="tag" class="tagsCreated">#{{ tag }}</div>
    </div>
  </div>
</template>

<script>
import getTags from "@/composables/getTags";
export default {
  props: ["posts"],
  setup(props) {
    const { tags } = getTags(props.posts)
  
    return { tags }
  }
}
</script>

<style>
h3 {
  font-size: 25px;
}
</style>
