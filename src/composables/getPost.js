import { ref } from "vue";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const loadPost = async () => {
    try {
      let res = await fetch("http://localhost:5000/posts/" + id)
      if (!res.ok) {
        throw Error("This post does Not exist");
      }
      post.value = await res.json();
    } catch (err) {
      error.value = err.message;
    }
  };
  return { post, error, loadPost };
};

export default getPost;
