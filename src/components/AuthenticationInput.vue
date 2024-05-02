<template>
  <div class="authentication-input-container">
    <InputApp
      label="Mã xác thực"
      placeholder="Nhập mã xác thực"
      :required="true"
      class="authentication-input"
      v-bind="$attrs"
    />

    <CapchaSolver />
  </div>
</template>

<script setup lang="ts">
import CapchaSolver from '@/components/CapchaSolver.vue'
import InputApp from '@/components/InputApp.vue'
</script>

<style scoped>
.authentication-input-container {
  display: flex;
  align-items: end;
  gap: 8px;
}

.authentication-input {
  flex-grow: 1;
}
</style>
