<template>
  <div v-if="hasUnderline">
    <div class="title-container">
      <slot name="icon" />
      <h1 class="title text">{{ title }}</h1>
    </div>

    <div class="divider" />
  </div>

  <div v-else>
    <div class="title-container">
      <slot name="icon" />

      <h1 class="title title-no-underline">{{ title }}</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
interface TitleProps {
  title: string
  hasUnderline?: boolean
}
const { title, hasUnderline } = withDefaults(defineProps<TitleProps>(), {
  hasUnderline: true
})
</script>

<style scoped>
.title-container {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
}
.title {
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
}
.title-no-underline {
  background-color: #c6deff;
  padding: 10px 20px;
  width: 100%;

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
.title-no-underline::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #c6deff;
  z-index: -1;
  border-radius: 2px;
}
.divider {
  width: 100%;
  height: 2px;
  background-color: #102bba;
  margin-top: 2px;
}

@media (min-width: 768px) {
  .title {
    font-size: 18px;
  }
}

@media (min-width: 1024px) {
  .title {
    font-size: 20px;
  }
}
</style>
