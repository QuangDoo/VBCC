<script setup lang="ts">
import TitleSearchIcon from '@/assets/icons/TitleSearchIcon.vue'
import TabsApp, { type TabAppProps } from '@/components/TabsApp.vue'
import TitleApp from '@/components/TitleApp.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const tabs = ref<TabAppProps['items']>([
  { key: 'certificate-number', label: 'Tra cứu theo số hiệu', path: '/lookup' },
  { key: 'name', label: 'Tra cứu theo tên', path: '/lookup/tra-cuu-theo-ten' },
  { key: 'user-id-card-number', label: 'Tra cứu theo CCCD', path: '/lookup/tra-cuu-theo-cccd' }
])

const route = useRoute()
</script>

<template>
  <TitleApp :title="'Tra cứu thông tin văn bằng chứng chỉ'" :has-underline="false">
    <template #icon>
      <TitleSearchIcon />
    </template>
  </TitleApp>

  <TabsApp :items="tabs" class="tab" />

  <RouterView />
</template>

<style scoped>
.tab {
  padding: 12px 0px 20px 0px;
  margin-left: 4px;
}
</style>
