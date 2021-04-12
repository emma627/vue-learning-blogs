<template>
<div class="SingleBlog">
    <h2>{{blog.title}}</h2>
    <p>{{blog.content}}</p>
</div>
  
</template>

<script>
export default {
    props:["blog"]

}
</script>

<style>

</style>