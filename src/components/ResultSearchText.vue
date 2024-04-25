<template>
  <p class="text-search-result">
    <span>Tìm thấy </span>
    <span style="color: #ad1206 !important"> {{ length }} kết quả</span>
    <span> trùng khớp</span>
  </p>
</template>

<script setup lang="ts">
defineProps<{ length: number }>()
</script>

<style scoped>
.text-search-result {
  font-style: italic;
  color: #0000c5;
}
</style>
