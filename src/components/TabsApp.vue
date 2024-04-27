<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'

export interface TabAppProps {
  items: { key: string; label: string; path: string }[]
}

const { items } = defineProps<TabAppProps>()

const route = useRoute()
</script>

<template>
  <div class="tabs-container">
    <RouterLink
      v-for="item in items"
      :key="item.key"
      class="tab-item"
      :to="item.path"
      :class="{
        activeText: route.path === item.path,
        active: route.path === item.path,
        text: route.path === item.path
      }"
    >
      {{ item.label }}
    </RouterLink>
  </div>
</template>

<style scoped>
.tabs-container {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: 4px;
}
.tab-item {
  padding: 12px;
  border-radius: 4px;
  box-shadow: 0px 2px 8px 0px #00000040;
  text-decoration: none;
  color: black !important;
}

.activeText {
  font-weight: 700;
}

.active {
  /* Setting the gradient for the text */
  background-image: linear-gradient(
    to right,
    var(--vt-c-primary-10-color),
    var(--vt-c-primary-20-color)
  );

  /* Clipping the gradient background to the text */
  -webkit-background-clip: text;
  background-clip: text;

  /* Making the text itself transparent, so the gradient shows through */
  -webkit-text-fill-color: transparent;
  color: transparent; /* This is for browsers that do not support the above property */

  /* Additional styles to ensure cross-browser compatibility */
  position: relative;
}
.active::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #c6deff;
  z-index: -1;
  border-radius: 2px;
  box-shadow: 0px 2px 8px 0px #00000040;
}
</style>
