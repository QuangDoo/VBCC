<template>
  <div class="news">
    <p class="news__title text">Tổ chức tập huấn Tháng 5/2023</p>
    <p class="news__content">Buổi tập huấn bao gồm các nội dung sau: - Cán bộ thư viện chuẩn..</p>

    <DateLabel :date="new Date()" />

    <div class="divider"></div>
  </div>
</template>

<script setup lang="ts">
import DateLabel from './DateLabel.vue'
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
}
.news__content {
  line-height: 24px;
  font-size: 12px;
}

.divider {
  width: 100%;
  height: 1px;
  background-color: #9ba3ac;
}
</style>
