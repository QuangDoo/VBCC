<template>
  <footer class="footer">
    <div class="footer-background-image-left" />
    <div class="container footer-container">
      <div class="footer__right">
        <h2 class="footer__right-title">SỞ GIÁO DỤC VÀ ĐÀO TẠO BẾN TRE</h2>

        <address class="footer__right-text">
          <AddressIcon />Địa chỉ: 90a Nguyễn Thái Sơn, Phường 3, Thành phố Bến Tre
        </address>

        <p class="footer__right-text"><MailIcon />Email: thuvienthptgovap@gmail.com</p>

        <p class="footer__right-text"><PhoneIcon />Số điện thoại: 090293232</p>
      </div>

      <div class="footer__left">
        <p class="footer__left-left">Đang online: 1000000</p>
        <p class="footer__left-left">Tổng số lượt truy cập: 1.280</p>
      </div>
    </div>

    <div class="footer-background-image-right" />

    <p class="footer__copyright">
      Copyright 2024 © BiTech | Phần mềm Quản lý văn bằng chứng chỉ | Bitechco
    </p>
  </footer>
</template>

<script setup lang="ts">
import AddressIcon from '@/assets/icons/AddressIcon.vue'
import MailIcon from '@/assets/icons/MailIcon.vue'
import PhoneIcon from '@/assets/icons/PhoneIcon.vue'
</script>

<style scoped>
.footer {
  background-image: linear-gradient(to right, #11277c, #0000c5);
  padding: 16px 0 8px 0;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: auto;
  flex-shrink: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.footer-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-background-image-right {
  background-image: url('@/assets/images/footer-right.png');
  height: 200px;
  width: 312px;
  top: -50px;
  right: 0;
  position: absolute;
  background-repeat: no-repeat;
}
.footer-background-image-left {
  background-image: url('@/assets/images/footer-left.png');
  height: 200px;
  width: 202.45px;
  left: 0;
  top: 0;
  position: absolute;
  background-repeat: no-repeat;
}
.footer__right {
  color: white;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.footer__right-title {
  font-size: 14px;
  font-weight: 700;
}
.footer__right-text {
  font-size: 10px;
  font-family: 400;
  display: inline-flex;
  gap: 8px;
  align-items: center;
}
.footer__left {
  color: white;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.footer__left-left {
  font-size: 10px;
  gap: 8px;
}
.footer__copyright {
  font-size: 10px;
  color: #ffffff;
  opacity: 0.6;
  text-align: center;
}

@media (min-width: 768px) {
  .footer-container {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }

  .footer__right-text {
    font-size: 12px;
  }

  .footer__right-title {
    font-size: 18px;
  }

  .footer__left-left {
    font-size: 14px;
    gap: 8px;
  }

  .footer__copyright {
    font-size: 12px;
  }
  .footer__left-left {
    font-size: 12px;
  }
}

@media (min-width: 1024px) {
  .footer__right-title {
    font-size: 20px;
  }
  .button-label {
    font-size: 16px;
  }
  .footer__left-left {
    font-size: 16px;
    gap: 8px;
  }
  .footer__copyright {
    font-size: 14px;
  }
  .footer__right-text {
    font-size: 14px;
  }

  .footer__left-left {
    font-size: 14px;
  }
}
</style>
