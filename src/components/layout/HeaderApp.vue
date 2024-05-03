<template>
  <div class="header">
    <div class="container header__container">
      <div class="header__right">
        <img :src="imageSrc" alt="Logo" class="header__logo" />

        <div>
          <h1 class="header__title-sgd">SỞ GIÁO DỤC & ĐÀO TẠO BẾN TRE</h1>
          <h1 class="header__title">CỔNG THÔNG TIN TRA CỨU VĂN BẰNG CHỨNG CHỈ</h1>

          <h1 class="header__title--mobile">CỔNG THÔNG TIN TRA CỨU VBCC</h1>
        </div>
      </div>

      <!-- nav mobile & tablet -->
      <ListIcon class="header__list-icon" @click="toggleModal" />
      <!-- menu mobile -->
      <MenuModal :isOpen="open" @closeModal="toggleModal" />

      <!-- nav desktop -->
      <nav class="header__nav">
        <RouterLink
          to="/"
          activeClass="active-link"
          exactActiveClass="exact-active-link"
          class="header__nav--link"
          >Giới thiệu</RouterLink
        >
        <RouterLink to="/lookup" class="header__nav--link">Tra cứu</RouterLink>
        <RouterLink to="/news" class="header__nav--link">Tin tức</RouterLink>
        <RouterLink to="/services" class="header__nav--link">Dịch vụ</RouterLink>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import ListIcon from '@/assets/icons/ListIcon.vue'
import logo from '@/assets/images/logo.png' // Assuming webpack alias '@' points to /src
import { ref } from 'vue'
import MenuModal from './MenuModal.vue'

const imageSrc = ref(logo)
const open = ref(false)

function toggleModal() {
  open.value = !open.value
}
</script>

<style scoped>
.header {
  background-image: linear-gradient(to right, #11277c, #0000c5);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.header__right {
  display: flex;
  gap: 16px;
  flex: 2;
  align-items: center;
}
.header__title-sgd {
  font-weight: 700;
  font-size: 24px;
  color: white;
}

.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__nav--link {
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
}
.header__logo {
  max-width: 70px;
  max-height: 70px;
  flex-shrink: 0;
  flex-grow: 1;
}

/* New Media Query for Mobile Screen Styling */
@media (min-width: 100px) and (max-width: 600px) {
  .header__title-sgd {
    font-size: 10px; /* Smaller font size for mobile */
    margin-bottom: 5px;
  }

  .header__title--mobile {
    font-size: 14px; /* Smaller font size for mobile */
    line-height: 20px;
    font-weight: 700;
    color: white;
  }

  .header__title {
    display: none;
  }

  .header__logo {
    max-width: 50px;
    max-height: 50px;
    flex-shrink: 0;
    flex-grow: 1;
  }
  .header__right {
    gap: 8px;
  }
  .header__nav {
    display: none;
  }
  .header {
    padding: 0px 0px;
  }
}

@media (min-width: 601px) and (max-width: 1024px) {
  .header__title-sgd {
    font-size: 15px; /* Smaller font size for mobile */
    margin-bottom: 5px;
  }

  .header__title--mobile {
    font-size: 18px; /* Smaller font size for mobile */
    line-height: 20px;
    font-weight: 700;
    color: white;
  }

  .header__title {
    display: none;
  }

  .header__list-icon {
    display: none;
  }
  .header__nav--link {
    color: white;
    text-decoration: none;
    font-weight: 600;
    font-size: 12px;
  }

  .header__title {
    font-weight: 700;
    font-size: 18px;
    color: white;
  }
  .header__nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex: 1;
  }
}

@media (min-width: 993px) {
  .header__title-sgd {
    font-size: 24px; /* Smaller font size for mobile */
    margin-bottom: 5px;
  }

  .header__title--mobile {
    display: none;
  }

  .header__title {
    font-weight: 700;
    font-size: 24px;
    color: white;
    line-height: 30px;
  }

  .header__list-icon {
    display: none;
  }
  .header__nav--link {
    color: white;
    text-decoration: none;
    font-weight: 600;
    font-size: 16px;
  }

  .header__nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex: 1;
  }
}
</style>
