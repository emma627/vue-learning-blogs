<template>
  <div class="nav-bar">
      <h1>My Javascript Frameworks Blogs</h1>
      <nav class="nav">
       <router-link :to="{ name : 'Home'}">Home</router-link>
       <router-link :to="{ name : 'Create'}">Create a blog</router-link>
       
      </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.nav-bar{
max-width: 1200px;
margin:0 auto;
display: flex;
justify-content: space-between;
padding:10px;
align-items: center;

}
h1{
    color:rgb(223, 93, 127);
    font-size: 45px;
    font-weight: bold;
}

nav a{
    padding:20px;
    text-decoration: none;
    color:black;
    font-size: 20px;
}
nav a.router-link-active{
    color:teal;
    font-weight: bold;
}

</style>