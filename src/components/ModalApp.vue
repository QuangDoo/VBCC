<template>
  <teleport to="body">
    <div v-if="isOpen" class="modal-overlay" @click.self="$emit('closeModal')">
      <div class="modal">
        <h2>Modal Title</h2>
        <p>This modal is teleported to the body element!</p>
        <button @click="$emit('closeModal')">Close Modal</button>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
defineProps<{ isOpen: boolean }>()
defineEmits(['closeModal'])
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  max-width: 95%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  z-index: 1000;
}
</style>
