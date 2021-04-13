<template>
  <form @submit.prevent="handleSubmit" class="form">
    <div class="layoutForm">
      <label class="title" for="title">Title:</label>
      <input type="text" name="title" id="name" v-model="title" required />
    </div>
    <div class="layoutForm">
      <label class="content" for="content">Content:</label>
      <textarea id="content" name="content" v-model="content" required />
    </div>
    <div class="layoutForm">
      <label class="tags" for="tags">Tags: press enter to add a tag</label>
      <input
        id="tags"
        name="tags"
        v-model="tag"
        @keydown.enter.prevent="handleKeyDown"
      />
    </div>
    <div class="tagsGroup">
    <div v-for="tag in tags" :key="tag" class="tagsCreated">
      #{{ tag }}
      </div>
    </div>
    <button>Submit</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "Create",
  setup() {
    let title = ref("");
    let content = ref("");
    let tag = ref("");
    let tags = ref([]);

    const router = useRouter();
    let handleSubmit = async () => {
      let newPost = {
        title: title.value,
        content: title.value,
        tags: tags.value,
      };
      await fetch("http://localhost:5000/posts", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newPost),
      });
      router.push({ name: "Home" });
    };
    let handleKeyDown = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value.replace(/\s/, "");
        tags.value.push(tag.value);
      }
      tag.value = "";
    };
    return { title, content, tag, tags, handleSubmit, handleKeyDown };
  },
};
</script>

<style>
.form {
  display: flex;
  flex-direction: column;
  margin: 0 10px 180px;
}
.layoutForm {
  display: flex;
  flex-direction: column;
  margin: 10px auto;
}

label {
  font-size: 30px;
  color: seagreen;
  font-weight: bold;
}
input {
  width: 400px;
  height: 40px;
  font-size: 22px;
}
textarea {
  width: 600px;
  height: 300px;
  font-size: 18px;
}
.title::before {
  content: "";
  display: inline-block;
  width: 45px;
  height: 45px;
  position: relative;
  top: 10px;
  background: url(https://www.flaticon.com/svg/vstatic/svg/876/876019.svg?token=exp=1618260993~hmac=6dac0418d521b5861c073ac4a5dcfade);
  background-size: 100%;
}
.content::before {
  content: "";
  display: inline-block;
  width: 33px;
  height: 33px;
  position: relative;
  top: 8px;
  left: -5px;
  background: url(https://www.flaticon.com/svg/vstatic/svg/2282/2282181.svg?token=exp=1618320815~hmac=d7aee731e5b7901b8b463ea20ddd3a76);
  background-size: 100%;
}
.tags::before {
  content: "";
  display: inline-block;
  width: 33px;
  height: 33px;
  position: relative;
  top: 6px;
  left: 1px;
  background: url(https://www.flaticon.com/svg/vstatic/svg/4143/4143584.svg?token=exp=1618321215~hmac=fcef2c60bb384064206b3dccd704ea5e);
  background-size: 100%;
}
.tags {
  font-size: 25px;
}
.tagsGroup{
  display:flex;
  flex-direction: row;
  justify-content: center;
  
}
.tagsCreated {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding:auto;
  margin:10px;
  height: 50px;
  width: 110px;
  background-color: tomato;
  color: white;
  border-radius: 1.5rem;
  font-size: 20px;
  font-weight: bold;
}
button {
  height: 50px;
  width: 110px;
  margin: 15px auto;
  background-color: seagreen;
  border-color: transparent;
  font-size: 20px;
}
</style>
