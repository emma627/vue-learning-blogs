<template>
  <div class="SinglePost">
    <router-link :to="{ name: 'Details', params: { id: post.id } }">
      <h2>{{ post.title }}</h2>
    </router-link>
    <p>{{ snippet }}</p>
    <div class="tagsGroup">
      <div v-for="tag in post.tags" :key="tag" class="tagsCreated">
        #{{ tag }}
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  name: "SinglePost",
  props: ["post"],
  setup(props) {
    const snippet = computed(() => {
      return props.post.content.substring(0, 180) + "[...]";
    });
    return { snippet };
  },
};
</script>

<style>
.SinglePost {
  margin: 50px;
  background-color: wheat;
  padding: 10px;
  border-radius: 0.9%;
  box-shadow: 1px -1px 5px -3px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 1px -1px 5px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px -1px 5px -3px rgba(0, 0, 0, 0.75);
}
.SinglePost a {
  text-decoration: none;
  color: steelblue;
  font-size: 20px;
}
.SinglePost a:hover {
  color: teal;
}

h2:before,
h2:after {
  content: "";
  display: inline-block;
  width: 50px;
  height: 50px;
  position: relative;
  top: 15px;
  background: url(https://www.flaticon.com/svg/vstatic/svg/876/876019.svg?token=exp=1618260993~hmac=6dac0418d521b5861c073ac4a5dcfade);
  background-size: 100%;
}
p {
  text-align: left;
  font-size: 25px;
}
</style>
