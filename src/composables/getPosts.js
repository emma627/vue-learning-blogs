import { ref } from "vue";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const loadPosts = async () => {
    try {
      const res = await fetch("http://localhost:5000/posts");
      if (!res.ok) {
        throw Error("no posts available!");
      }
      posts.value = await res.json();
    } catch (err) {
      error.value = err.message;
    }
  };
  return { posts, error, loadPosts };
};

export default getPosts;
