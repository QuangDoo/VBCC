<template>
  <teleport to="body">
    <div v-if="isOpen" class="modal-overlay">
      <nav class="header__nav">
        <RouterLink
          to="/"
          activeClass="active-link"
          exactActiveClass="exact-active-link"
          class="header__nav--link text"
          @click="$emit('closeModal')"
          >Giới thiệu</RouterLink
        >

        <RouterLink
          to="/lookup"
          activeClass="active-link"
          exactActiveClass="exact-active-link"
          class="header__nav--link text"
          @click="$emit('closeModal')"
          >Tra cứu</RouterLink
        >

        <RouterLink
          to="/news"
          activeClass="active-link"
          exactActiveClass="exact-active-link"
          class="header__nav--link text"
          @click="$emit('closeModal')"
          >Tin tức</RouterLink
        >

        <RouterLink
          to="/services"
          activeClass="active-link"
          exactActiveClass="exact-active-link"
          class="header__nav--link text"
          @click="$emit('closeModal')"
          >Dịch vụ</RouterLink
        >

        <p class="header__nav--link text" @click="$emit('closeModal')">Đóng</p>
      </nav>
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
  background-color: white;
  padding: 20px;
}

.header__nav {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.header__nav--link {
  text-decoration: none;
  font-weight: 600;
  border-bottom: 1px solid #0000c5;
}
</style>
