<template>
  <!-- Post preview-->
  <div class="post-preview">
    <RouterLink :to="{ name: 'ShowPost', params: { id: post.id } }">
      <h2 class="post-title">
        {{ post.title }}
      </h2>
      <h3 class="post-subtitle">
        {{ post.body }}
      </h3>
    </RouterLink>
    <span v-for="tag in post.tags" :key="tag" class="post-meta">
      <RouterLink :to="{ name: 'Tag', params: { tag: tag } }">
        #{{ tag }}
      </RouterLink>
    </span>
  </div>
  <!-- Divider-->
  <hr class="my-4" />
</template>

<script setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";
const { post } = defineProps(["post"]);
</script>

<style></style>
