<template>
  <div class="SingleBlog">
    <router-link :to="{ name: 'Details', params:{ id:blog.id}}">
    <h2>{{ blog.title }}</h2>
    </router-link>
    <p>{{ snippet }}</p>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
export default {
  name:"SingleBlog",
  props: ["blog"],
  setup(props){
  const snippet = computed ( ()=>{
return props.blog.content.substring(0,180) + "[...]"
  })
  return { snippet }
}
}

</script>

<style>
.SingleBlog {
  margin: 50px 180px;
}
.SingleBlog a{
text-decoration: none;
color:steelblue;
font-size:20px;
}
.SingleBlog a:hover{
  color:tan;
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
