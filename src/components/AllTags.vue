<template>
  <div class="tag-cloud">
    <h3>All Tags</h3>
    <div v-for="tag in tags" :key="tag" class="tagsCreated" id="tagBeside">
      <router-link :to="{ name: 'Tag', params: { tag: tag } }">
        #{{ tag }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: ["posts"],
  setup(props) {
    let tags = ref([]);
    let tagSet = new Set();

    props.posts.forEach((item) => {
      item.tags.forEach((tag) => tagSet.add(tag));
    });
    tags = [...tagSet];


    return { tags };
  },
};
</script>

<style>
h3 {
  font-size: 25px;
}
#tagBeside a{
  color:white;
  text-decoration: none;
  align-content: center;
}
#tagBeside:hover{
  background-color: turquoise;
}
</style>
