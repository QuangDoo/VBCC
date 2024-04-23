<template>
  <div class="container main-container">
    <RouterView />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.main-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>
