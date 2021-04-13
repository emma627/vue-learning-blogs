import { ref } from "vue";

const getBlogs = () => {
  const blogs = ref([]);
  const error = ref(null);

  const loadBlogs = async () => {
    try {
      const res = await fetch("http://localhost:5000/blogs");
      if (!res.ok) {
        throw Error("no blogs available!");
      }
      blogs.value = await res.json();
    } catch (err) {
      error.value = err.message;
    }
  };
  return { blogs, error, loadBlogs };
};

export default getBlogs;
