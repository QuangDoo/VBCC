<template>
  <button
    class="button"
    :class="[type, { 'loading-overlay': loading, 'button-disabled': disabled }]"
    type="button"
    v-bind="$attrs"
  >
    <div class="loading-indicator" v-if="loading">
      <IndicatorLoading />
    </div>
    <slot name="icon" v-if="!loading" />
    <p class="button-label" v-if="!!label">{{ label }}</p>
  </button>
</template>

<script setup lang="ts">
import IndicatorLoading from '@/assets/icons/IndicatorLoading.vue'

interface ButtonType {
  readonly type: 'primary' | 'default' | 'dashed' | 'text' | 'link'
}

interface ButtonAppProps {
  label?: string
  type?: ButtonType['type']
  loading?: boolean
  disabled?: boolean
}

defineProps<ButtonAppProps>()
</script>

<style scoped>
.button {
  border-radius: 4px;
  outline: none;
  display: flex;
  padding-top: 4px;
  padding-bottom: 4px;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}
.loading-overlay {
  background-color: rgba(0, 0, 0, 0.1); /* Adds a dark overlay */
  pointer-events: none; /* Optional: Disables interaction */
}
.button-label {
  font-size: 16px;
  font-weight: 400;
}
.primary {
  background-image: linear-gradient(to right, #11277c, #0000c5);
  color: white;
  border: none;
}
.default {
  background-color: #9ba3ac;
  color: white;
  border: none;
}
.button-disabled {
  background-color: grey;
  background-image: none;
  cursor: not-allowed;
}
</style>
