<template>
  <TitleApp :title="'Đăng ký cấp bản sao'" :has-underline="false">
    <template #icon>
      <TitleSearchIcon />
    </template>
  </TitleApp>

  <StepsBar :labels="steps" :active="1" style="margin: 20px 0px" />

  <TabsApp :items="tabs" />

  <RouterView />
</template>

<script setup lang="ts">
import TitleSearchIcon from '@/assets/icons/TitleSearchIcon.vue'
import StepsBar from '@/components/StepsBar.vue'
import TabsApp, { type TabAppProps } from '@/components/TabsApp.vue'
import TitleApp from '@/components/TitleApp.vue'
import { RouterView } from 'vue-router'

const steps: string[] = ['Thông tin văn bằng, chứng chỉ', 'Thông tin đăng ký', 'Phiếu đăng ký']
const tabs: TabAppProps['items'] = [
  {
    key: 'certificate-number',
    label: 'Tra cứu theo số hiệu',
    // components/ServiesView/CertificateNumberTab.vue
    path: '/services/tra-cuu-theo-so-hieu'
  },
  {
    key: 'name',
    label: 'Tra cứu theo tên',
    // components/ServiesView/NameTab.vue
    path: '/services/tra-cuu-theo-ten'
  },
  {
    key: 'user-id-card-number',
    label: 'Tra cứu theo CCCD',
    // components/ServiesView/UserIdCardNumberTab.vue
    path: '/services/tra-cuu-theo-cccd'
  }
]
</script>

<style scoped></style>
