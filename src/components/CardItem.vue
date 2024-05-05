<template>
  <RouterLink to="/news/123" style="text-decoration: none">
    <BoxView class="card-item">
      <div class="card-item-image-container">
        <img
          class="card-item-image"
          src="https://static-images.vnncdn.net/files/publish/2024/5/3/arsenal-1523.jpg?width=0&s=DHCiObUA226gmzSN_ikJNQ"
          alt=""
        />
      </div>

      <div style="display: flex; flex-direction: column; gap: 8px">
        <p class="text card-item-title">Tổ chức tập huấn phần mềm Thư viện số - Tháng 5/2023</p>

        <DateLabel :date="new Date()" />

        <p
          class="card-item-description"
          title="  Thủ tướng Chính phủ đã ban hành Quyết định số 206/QĐ-TTg phê duyệt Chương trình “Chuyển
          đổi số ngành thư viện đến năm 2025, định hướng đến năm 2030”. Với mục tiêu chung của
          Chương trình là ứng dụng mạnh mẽ, toàn diện công nghệ thông công nghệ thông tin, nhất là
          công nghệ số nhằm ..."
        >
          Thủ tướng Chính phủ đã ban hành Quyết định số 206/QĐ-TTg phê duyệt Chương trình “Chuyển
          đổi số ngành thư viện đến năm 2025, định hướng đến năm 2030”. Với mục tiêu chung của
          Chương trình là ứng dụng mạnh mẽ, toàn diện công nghệ thông công nghệ thông tin, nhất là
          công nghệ số nhằm ...
        </p>
      </div>
    </BoxView>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import BoxView from './BoxView.vue'
import DateLabel from './DateLabel.vue'
</script>

<style scoped>
.card-item {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.card-item-image-container {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 aspect ratio */
  overflow: hidden;
}
.card-item-image {
  position: absolute;
  top: 0px;
  left: 0px;
  height: auto;
  width: 100%;
  object-fit: cover;
  background-color: white;
}
.card-item-title {
  font-size: 14px;
  font-weight: bold;
}
.date {
  font-size: 12px;
  color: #757575;
}
.card-item-description {
  font-size: 12px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
  color: #333333;
}
@media (min-width: 640px) {
  .card-item-description {
    font-size: 14px;
    -webkit-line-clamp: 3; /* number of lines to show */
    line-clamp: 3;
    -webkit-box-orient: vertical;
  }
}

@media (min-width: 768px) {
  .card-item-description {
    font-size: 14px;
    -webkit-line-clamp: 3; /* number of lines to show */
    line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .date {
    font-size: 14px;
  }
  .card-item {
    display: flex;
    flex-direction: row;
    gap: 12px;
  }
  .card-item-image-container {
    padding-top: 15.25%;
    width: 60%;
  }
}

@media (min-width: 1024px) {
  .card-item-image-container {
    padding-top: 16.25%;
    width: 60%;
  }
  .card-item-description {
    font-size: 14px;
    -webkit-line-clamp: 3; /* number of lines to show */
    line-clamp: 3;
    -webkit-box-orient: vertical;
  }
}

@media (min-width: 1280px) {
  .card-item-image-container {
    padding-top: 16.25%;
    width: 60%;
  }
  .card-item-description {
    font-size: 16px;
    -webkit-line-clamp: 4; /* number of lines to show */
    line-clamp: 4;
    -webkit-box-orient: vertical;
  }
}
</style>
