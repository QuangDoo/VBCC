<template>
  <div class="breadcumb">
    <RouterLink :to="route.path" class="breadcumb__link text">
      <HomeIcon />
      {{ route.name }}
    </RouterLink>

    <DoupleChevRight />

    <p class="breadcumb__link">
      Cập nhật phiên bản mới cho cổng thông tin tra cứu văn bằng chứng chỉ ...
    </p>
  </div>
</template>

<script setup lang="ts">
import DoupleChevRight from '@/assets/icons/DoupleChevRight.vue'
import HomeIcon from '@/assets/icons/HomeIcon.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style scoped>
.breadcumb {
  display: flex;
  gap: 8px;
  align-items: center;
}
.breadcumb .breadcumb__link {
  text-decoration: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #494d51;
}
</style>
