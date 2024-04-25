<template>
  <button class="primary" v-bind="$attrs">
    <slot name="icon" />
    <p class="button-label">
      {{ label }}
    </p>
  </button>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const label = inject('label')
</script>

<style scoped>
.primary {
  background-image: linear-gradient(to right, #11277c, #0000c5);
}
.button-label {
  color: white;
}
</style>
