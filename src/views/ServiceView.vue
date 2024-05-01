<template>
  <TitleApp :title="'Đăng ký cấp bản sao'" :has-underline="false">
    <template #icon>
      <TitleSearchIcon />
    </template>
  </TitleApp>

  <StepsBar :labels="steps" :active="0" style="margin: 20px 0px" />

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
    key: '1',
    label: 'Tra cứu theo số hiệu',
    path: '/services/tra-cuu-so-hieu'
  },
  {
    key: '2',
    label: 'Tra cứu theo tên',
    path: '/services/tra-cuu-name'
  },
  {
    key: '3',
    label: 'Tra cứu theo CCCD',
    path: '/services/tra-cuu-cccd'
  }
]
</script>

<style scoped></style>
