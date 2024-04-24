<template>
  <div class="header">
    <div class="container header__container">
      <div class="header__right">
        <img :src="imageSrc" alt="Logo" />

        <div>
          <h1 class="header__title">SỞ GIÁO DỤC & ĐÀO TẠO BẾN TRE</h1>
          <h1 class="header__title">CỔNG THÔNG TIN TRA CỨU VĂN BẰNG CHỨNG CHỈ</h1>
        </div>
      </div>

      <nav class="header__nav">
        <RouterLink
          to="/"
          activeClass="active-link"
          exactActiveClass="exact-active-link"
          class="header__nav__link"
          >Giới thiệu</RouterLink
        >
        <RouterLink to="/lookup" class="header__nav__link">Tra cứu</RouterLink>
        <RouterLink to="/news" class="header__nav__link">Tin tức</RouterLink>
        <RouterLink to="/services" class="header__nav__link">Dịch vụ</RouterLink>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import logo from '@/assets/images/logo.png' // Assuming webpack alias '@' points to /src

const imageSrc = ref(logo)
</script>

<style scoped>
.header {
  background-image: linear-gradient(to right, #11277c, #0000c5);
}

.header__right {
  display: flex;
  gap: 16px;
  flex: 2;
}

.header__title {
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: white;
}

.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
}

.header__nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex: 1;
}

.header__nav__link {
  color: white;
  text-decoration: none;
  font-weight: 600;
}
</style>
