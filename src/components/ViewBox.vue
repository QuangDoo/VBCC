<template>
  <div class="view-box">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.view-box {
  box-shadow: 0px 3px 8px 0px #00000040;
  padding: 12px;
  border-radius: 8px;
}
</style>
