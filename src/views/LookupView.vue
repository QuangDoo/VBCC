<script setup lang="ts">
import TitleSearchIcon from '@/assets/icons/TitleSearchIcon.vue'
import TabsApp, { type TabAppProps } from '@/components/TabsApp.vue'
import TitleApp from '@/components/TitleApp.vue'
import { ref } from 'vue'

const tabs = ref<TabAppProps['items']>([
  {
    key: 'certificate-number',
    label: 'Tra cứu theo số hiệu',
    path: '/lookup/tra-cuu-theo-so-hieu'
  },
  { key: 'name', label: 'Tra cứu theo tên', path: '/lookup/tra-cuu-theo-ten' },
  { key: 'user-id-card-number', label: 'Tra cứu theo CCCD', path: '/lookup/tra-cuu-theo-cccd' }
])

const tabs_mobile = ref<TabAppProps['items']>([
  {
    key: 'certificate-number',
    label: 'Theo số hiệu',
    path: '/lookup/tra-cuu-theo-so-hieu'
  },
  { key: 'name', label: 'Theo tên', path: '/lookup/tra-cuu-theo-ten' },
  { key: 'user-id-card-number', label: 'Theo CCCD', path: '/lookup/tra-cuu-theo-cccd' }
])
</script>

<template>
  <TitleApp :title="'Tra cứu thông tin văn bằng chứng chỉ'" :has-underline="false">
    <template #icon>
      <TitleSearchIcon />
    </template>
  </TitleApp>

  <TabsApp :items="tabs_mobile" class="tabs-mobile-tablet" />

  <TabsApp :items="tabs" class="tab-desktop" />

  <RouterView />
</template>

<style scoped>
.tabs-mobile-tablet {
  padding: 10px 0px 10px 0px;
  margin-left: 4px;
}

.tab-desktop {
  display: none;
  padding: 10px 0px 10px 0px;
}
@media (min-width: 768px) {
  .tabs-mobile-tablet {
    display: none;
  }
  .tab-desktop {
    display: inline-flex;
    padding: 12px 0px 20px 0px;
  }
}
</style>
