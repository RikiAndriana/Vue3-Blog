<template>
  <!-- Page Header-->
  <header
    class="masthead"
    style="background-image: url('assets/img/contact-bg.jpg')"
  >
    <div class="container position-relative px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <div class="page-heading">
            <h1>Create new Post</h1>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- Main Content-->
  <main class="mb-4">
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <div class="my-5">
            <form @submit.prevent="handleSubmit">
              <div class="form-floating">
                <input
                  class="form-control"
                  id="name"
                  type="text"
                  placeholder="Title Post..."
                  v-model="title"
                />
                <label for="name">Title</label>
              </div>

              <div class="form-floating">
                <textarea
                  class="form-control"
                  placeholder="Input body post..."
                  style="height: 12rem"
                  v-model="body"
                ></textarea
                ><label>Input body post...</label>
              </div>

              <div class="form-floating">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Input Tags..."
                  v-model="tag"
                  @keydown.enter.prevent="handleKeydownTag"
                />
                <label for="name">Tags</label>
              </div>

              <span v-for="tag in tags" :key="tag">#{{ tag }}</span>
              <br />
              <br />
              <br />

              <!-- Submit Button-->
              <button class="btn btn-primary text-uppercase" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const title = ref("");
const body = ref("");
const tag = ref("");
const tags = ref([]);

const handleKeydownTag = () => {
  if (!tags.value.includes(tag.value)) {
    tag.value = tag.value.replace(/\s/g, "");
    tags.value.push(tag.value);
  }
  tag.value = "";
};

const handleSubmit = async () => {
  const post = {
    title: title.value,
    body: body.value,
    tags: tags.value,
  };
  await fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });
  router.push({
    name: "Home",
  });
};
</script>
