import { ref } from "vue";

const getBlog = (id) => {
  const blog = ref(null);
  const error = ref(null);

  const loadBlog = async () => {
    try {
      let res = await fetch("http://localhost:5000/blogs/" + id)
      if (!res.ok) {
        throw Error("This blog does Not exist");
      }
      blog.value = await res.json();
    } catch (err) {
      error.value = err.message;
    }
  };
  return { blog, error, loadBlog };
};

export default getBlog;
