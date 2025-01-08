import { ref } from "vue";

const getPost = () => {
  const post = ref(null);
  const error = ref(null);

  const load = async (id) => {
    try {
      let data = await fetch(`http://localhost:3000/posts/${id}`);
      if (!data.ok) {
        throw Error("tidak ada data");
      }
      post.value = await data.json();
    } catch (err) {
      error.value = err.message;
    }
  };
  return { post, error, load };
};

export default getPost;
