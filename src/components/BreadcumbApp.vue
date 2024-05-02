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
  gap: 4px;
  align-items: center;
  flex-wrap: wrap;
}
.breadcumb .breadcumb__link {
  text-decoration: none;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  color: #494d51;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (min-width: 768px) {
  .breadcumb .breadcumb__link {
    font-size: 14px;
  }
}

@media (min-width: 1024px) {
  .breadcumb .breadcumb__link {
    font-size: 16px;
  }
}
</style>
