<template>
  <div style="display: flex; gap: 4px; align-items: center">
    <CalendarIcon />
    <span class="date">{{ formatDate(new Date()) }}</span>
  </div>
</template>

<script setup lang="ts">
import { formatDate } from '@/utils'

import CalendarIcon from '@/assets/icons/CalendarIcon.vue'

defineProps<{ date: Date }>()
</script>

<style scoped>
.date {
  font-size: 12px;
  color: #757575;
}

@media (min-width: 768px) {
  .date {
    font-size: 14px;
  }
}
</style>
