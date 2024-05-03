<template>
  <div class="certificate-number-tab">
    <BoxView>
      <form action="" class="form">
        <DateTimePicker
          label="Năm tốt nghiệp"
          placeholder="Chọn năm tốt nghiệp"
          required
          year-picker
          picker="year"
        />

        <div class="input">
          <InputApp
            label="Số hiệu văn bằng/chứng chỉ"
            placeholder="Nhập số hiệu văn bằng"
            required
            style="flex-grow: 1"
          />

          <div class="actions">
            <ButtonApp type="default" label="Làm mới" class="button">
              <template #icon>
                <RefreshIcon />
              </template>
            </ButtonApp>

            <ButtonApp type="primary" label="Tiếp tục" class="button">
              <template #icon>
                <NextIcon />
              </template>
            </ButtonApp>
          </div>
        </div>

        <div class="checkbox">
          <CheckboxApp label="Tìm chính xác" />

          <CheckboxApp label="Tìm không dấu" />
        </div>
      </form>
    </BoxView>
  </div>
</template>

<script setup lang="ts">
import NextIcon from '@/assets/icons/NextIcon.vue'
import RefreshIcon from '@/assets/icons/RefreshIcon.vue'
import BoxView from '../BoxView.vue'
import ButtonApp from '../Button/ButtonApp.vue'
import DateTimePicker from '../DateTimePicker.vue'
import InputApp from '../InputApp.vue'
import CheckboxApp from '../CheckboxApp.vue'
</script>

<style scoped>
.certificate-number-tab {
  padding: 0px 6px;
  margin: 12px 0px;
}
.form {
  display: grid;
  grid-template-columns: auto;
  grid-gap: 12px;
}
.actions {
  display: flex;
  align-items: end;
  justify-content: end;
  gap: 4px;
}
.input {
  display: flex;
  gap: 12px;
  flex-direction: column;
}
.button {
  padding: 8px 16px 8px 16px;
  height: 40px;
  width: 100%;
}
.checkbox {
  display: flex;
  /* gap: 30px; */
  justify-content: space-between;
}

@media (min-width: 768px) {
  .form {
    grid-template-columns: auto auto;
    grid-gap: 20px;
  }
  .button {
    width: unset;
  }

  .checkbox {
    display: flex;
    gap: 30px;
    justify-content: flex-start !important;
  }
}

@media (min-width: 1280px) {
  .input {
    flex-direction: row;
  }
  .button {
    width: unset;
  }

  .checkbox {
    display: flex;
    gap: 30px;
    justify-content: flex-start !important;
  }
}
</style>
