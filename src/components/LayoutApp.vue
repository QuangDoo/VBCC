<script setup lang="ts">
import FooterApp from '@/components/layout/FooterApp.vue'
import HeaderApp from '@/components/layout/HeaderApp.vue'
import MainApp from '@/components/layout/MainApp.vue'
</script>

<template>
  <div class="layout-container">
    <HeaderApp />

    <MainApp />

    <FooterApp />
  </div>
</template>

<style scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: auto;
}
</style>
