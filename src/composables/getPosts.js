import { ref } from 'vue'

const getPosts = () => {

  const posts = ref([])
  const error = ref(null)

  const loadPosts = async () => {
    try {
      let data = await fetch('http://localhost:5000/posts')
      if(!data.ok) {
        throw Error('no available data')
      }
      posts.value = await data.json()
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { posts, error, loadPosts }
}

export default getPosts
