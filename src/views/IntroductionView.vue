<template>
  <BreadcumbApp class="breadcumb" />

  <TitleApp :title="'Giới thiệu'" />

  <div class="introduce-container">
    <main class="main-content">
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 3</li>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>

        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </main>
    <div class="main-container">
      <aside class="aside">
        <TitleApp :title="'Tin tức mới nhất'">
          <template #icon>
            <NewsIcon />
          </template>
        </TitleApp>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 3</li>
          <li>Item 3</li>
          <li>Item 3</li>
          <li>Item 3</li>
          <li>Item 3</li>
        </ul>
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">
import NewsIcon from '@/assets/icons/NewsIcon.vue'
import BreadcumbApp from '@/components/BreadcumbApp.vue'
import TitleApp from '@/components/TitleApp.vue'
</script>

<style scoped>
.breadcumb {
  padding: 18px 0;
}
.aside {
  border: 5px solid #f3f3f3;
  padding-left: 24px;
  border-bottom: 0px;
  border-top: 0px;
  border-right: 0px;
}

.main-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  border: 5px solid #f3f3f3;
  height: max-content;
}
.introduce-container {
  display: flex;
  margin-top: 16px;
}
.main-content {
  flex: 2; /* Takes up remaining space */
}
.sidebar {
  flex: 1;
}
</style>
