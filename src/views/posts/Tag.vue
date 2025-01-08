<template>
  <!-- Page Header-->
  <header class="masthead" style="background-image: url('img/home-bg.jpg')">
    <div class="container position-relative px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <div class="site-heading">
            <h1>Clean Blog</h1>
            <span class="subheading">Post by tag {{}}</span>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- Main Content-->
  <div class="container px-4 px-lg-5">
    <div class="row gx-4 gx-lg-5 justify-content-center">
      <div class="col-md-10 col-lg-8 col-xl-7">
        <div v-if="error">{{ error }}</div>
        <div v-if="posts.length">
          <SinglePost v-for="post in postWithTag" :key="post.id" :post="post" />
        </div>
        <div v-else>
          <Loading />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Loading from "@/components/Loading.vue";
import SinglePost from "@/components/posts/SinglePost.vue";
import getPosts from "@/composable/getPosts";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const { posts, error, load } = getPosts();
load();

const postWithTag = computed(() => {
  return posts.value.filter((post) => post.tags.includes(route.params.tag));
});
</script>
