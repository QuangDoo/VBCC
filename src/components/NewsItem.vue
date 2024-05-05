<template>
  <RouterLink to="/news" style="text-decoration: none">
    <div class="news">
      <p class="news__title text" :title="title">{{ title }}</p>
      <p class="news__content" :title="content">{{ content }}</p>

      <DateLabel :date="new Date(publishedDate)" />

      <div class="divider"></div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import DateLabel from './DateLabel.vue'

defineProps<{ title: string; content: string; publishedDate: string }>()
</script>

<style scoped>
.news {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.news__title {
  font-size: 12px;
  font-weight: 700;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
}
.news__content {
  line-height: 24px;
  font-size: 12px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  color: #333333;
  text-indent: 20px;
}

.divider {
  width: 100%;
  height: 1px;
  background-color: #f3f3f3;
}

@media (min-width: 758px) {
  .news__title {
    font-size: 14px;
  }
  .news__content {
    font-size: 14px;
  }
}
</style>
