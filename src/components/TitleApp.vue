<template>
  <div>
    <div class="title-container">
      <slot name="icon" />
      <h1 class="title text">{{ title }}</h1>
    </div>

    <div class="divider" />
  </div>
</template>

<script setup lang="ts">
interface TitleProps {
  title: string
}
const { title } = defineProps<TitleProps>()
</script>

<style scoped>
.title-container {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.title {
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 5px;
  text-transform: uppercase;
}
.divider {
  width: 100%;
  height: 5px;
  background-color: #102bba;
}
</style>
