<script setup lang="ts">
import DateTimePicker from '@/components/DateTimePicker.vue'
import InputApp from '@/components/InputApp.vue'
import ViewBox from '@/components/ViewBox.vue'

import { ref } from 'vue'

const year = ref(new Date().getFullYear())
</script>

<template>
  <div class="certificate-number-tab">
    <ViewBox>
      <form class="form">
        <DateTimePicker :label="'Năm tốt nghiệp'" required v-model="year" year-picker />
        <InputApp
          :label="'Số hiệu văn bằng/chứng chỉ'"
          placeholder="Nhập số hiệu văn bằng"
          :required="true"
        />
        <InputApp :label="'Mã xác thực'" placeholder="Nhập mã xác thực" :required="true" />
      </form>
    </ViewBox>
  </div>
</template>

<style scoped>
.certificate-number-tab {
  padding: 0px 6px;
}
.form {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
}
</style>
