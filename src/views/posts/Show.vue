<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post">
    <!-- Page Header-->
    <header class="masthead" style="background-image: url('img/post-bg.jpg')">
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="post-heading">
              <h1>{{ post.title }}</h1>
              <span v-for="tag in post.tags" :key="tag" class="meta-post">
                #{{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Post Content-->
    <article class="mb-4">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <p>{{ post.body }}</p>
          </div>
        </div>
      </div>
    </article>
  </div>
  <div v-else>
    <Loading />
  </div>
</template>

<script setup>
import Loading from "@/components/Loading.vue";
import { defineProps } from "vue";
import getPost from "@/composable/getPost";
const props = defineProps(["id"]);

const { post, error, load } = getPost();
load(props.id);
</script>
