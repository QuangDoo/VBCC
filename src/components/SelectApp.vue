<template>
  <div>
    <div class="label-container">
      <label :for="label" class="label">{{ label }}</label>

      <span class="requeired" style="font-size: 12px" v-if="required">*</span>
    </div>

    <div class="select-wrapper">
      <select v-bind="$attrs" class="select">
        <option value="" v-for="option in options" :key="option.value">
          {{ option.label }}
        </option>
      </select>

      <div class="custom-arrow">
        <svg
          width="15"
          height="8"
          viewBox="0 0 15 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.145 0L7.5 4.94467L12.855 0L14.5 1.52227L7.5 8L0.5 1.52227L2.145 0Z"
            fill="#B6BDC6"
          />
        </svg>
      </div>
    </div>

    <p class="error-text" v-if="error">Nhập vô rồi ấn nút tìm kiếm mấy bà nội!</p>
  </div>
</template>

<script setup lang="ts">
interface SelectAppProps {
  options: { label: string; value: string }[]
  label?: string
  required?: boolean
  error?: boolean
}

defineProps<SelectAppProps>()
</script>

<style scoped>
.label-container {
  display: flex;
  gap: 1px;
}
.label {
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 8px;
}
.requeired {
  color: #e02b1d;
}
.focus {
  border: 1px solid var(--vt-c-primary-20-color) !important;
  box-shadow: 0px 1px 2px 1px #cbccce;
}
.error {
  border: 1px solid #e02b1d !important;
}
.select {
  outline: none;
  border: none;
  width: 100% !important;
  padding: 0px 12px;
  border: 1px solid #9ba3ac;
  border-radius: 2px;
  width: unset;
  display: flex;
  align-items: center;
  gap: 8px;
  height: 40px;

  &:hover {
    box-shadow: 0px 1px 2px 1px #cbccce;
  }
  &:focus {
    box-shadow: 0px 1px 2px 1px #cbccce;
    border: 1px solid var(--vt-c-primary-20-color) !important;
  }
}

.error-text {
  color: #e02b1d;
  font-size: 14px;
}

.select-wrapper {
  position: relative;
  display: inline-block;
  width: 100%; /* Độ rộng của select */
  font-size: 16px; /* Cỡ chữ, để đảm bảo rõ ràng */
}

.select-wrapper select {
  width: 100% !important;
  padding-right: 30px; /* Để chỗ cho mũi tên, đảm bảo có thể bấm vào */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer; /* Cho thấy có thể click */
  position: relative; /* Để select nằm trên mũi tên */
  z-index: 2; /* Đảm bảo select nằm trên mũi tên */
}

.select-wrapper .custom-arrow {
  position: absolute;
  top: 0;
  right: 10px; /* Điều chỉnh vị trí mũi tên */
  z-index: 1; /* Mũi tên nằm dưới select */
  height: 100%;
  pointer-events: none; /* Người dùng không thể tương tác trực tiếp */
  color: #333; /* Màu sắc của mũi tên */
  display: flex;
  align-items: center;
}

@media (min-width: 768px) {
  .label {
    font-size: 14px;
  }
  .error-text {
    font-size: 14px;
  }
}

@media (min-width: 768px) {
  .label {
    font-size: 15px;
  }
  .error-text {
    font-size: 15px;
  }
}

@media (min-width: 1024px) {
  .label {
    font-size: 16px;
  }
  .error-text {
    font-size: 16px;
  }
}
</style>
