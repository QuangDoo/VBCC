<template>
  <BreadcumbApp />

  <TitleApp :title="'Giới thiệu'" />

  <div class="introduce-container">
    <main class="main-content">
      <div v-for="i in 20" :key="i">
        <CardItem />
      </div>
    </main>
    <div class="main-container">
      <aside class="aside">
        <TitleApp :title="'Tin tức mới nhất'">
          <template #icon>
            <NewsIcon />
          </template>
        </TitleApp>

        <div class="news-item">
          <div v-for="i in 20" :key="i">
            <NewsItem
              :title="'Tổ chức tập huấn phần mềm Thư viện số - Tháng 5/2023'"
              :content="'Buổi tập huấn bao gồm các nội dung sau: - Cán bộ thư viện chuẩn.'"
              :publishedDate="new Date().toISOString()"
            />
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">
import NewsIcon from '@/assets/icons/NewsIcon.vue'
import BreadcumbApp from '@/components/BreadcumbApp.vue'
import CardItem from '@/components/CardItem.vue'
import NewsItem from '@/components/NewsItem.vue'
import TitleApp from '@/components/TitleApp.vue'
</script>

<style scoped>
.breadcumb {
  margin-bottom: 18px;
}

.main-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  height: max-content;
}
.introduce-container {
  display: grid;
  margin-top: 16px;
  grid-template-columns: auto;
  gap: 16px;
}
.main-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.news-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
}

@media (min-width: 1024px) {
  .introduce-container {
    display: grid;
    margin-top: 16px;
    grid-template-columns: 75% 25%;
    gap: 16px;
  }

  .aside {
    border: 2px solid #f3f3f3;
    padding-left: 24px;
    border-bottom: 0px;
    border-top: 0px;
    border-right: 0px;
  }
}
</style>
