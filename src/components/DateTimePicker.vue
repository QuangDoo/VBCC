<!-- eslint-disable vue/no-parsing-error -->
<script setup lang="ts">
import CalendarIcon from '@/assets/icons/CalendarIcon.vue'
import InputApp from '@/components/InputApp.vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { ref } from 'vue'

const date = ref(new Date())
const { label, required, placeholder } = defineProps<{
  label: string
  required?: boolean
  placeholder?: string
}>()
</script>
<template>
  <div class="date-picker">
    <VueDatePicker
      text-input
      style="width: 100%"
      v-model="date"
      auto-apply
      :action-row="{ showNow: false }"
      v-bind="$attrs"
    >
      <template #dp-input="{ value }">
        <InputApp
          :placeholder="placeholder"
          :label="label"
          :required="required"
          readonly
          type="text"
          :value="value"
        >
          <template #suffix>
            <CalendarIcon />
          </template>
        </InputApp>
      </template>

      <!-- @vue-ignore -->
      <template #clear-icon="{ clear }">
        <p @click="clear" class="dp__clear_icon">x</p>
      </template>

      <template #clock-icon>
        {{ null }}
      </template>
    </VueDatePicker>
  </div>
</template>

<style scoped>
.date-picker {
  display: flex;
  flex-direction: column;
  gap: 12px;
  &:hover {
    cursor: pointer;
  }
}
.label-container {
  display: flex;
}
.label-text {
  font-size: 16px;
  font-weight: 700;
}

.date-picker {
  width: 100%;
  height: 25px;
  display: flex;
  position: relative;
  font-size: 12px;
  transition: 0.3s;
}
.dp__clear_icon {
  position: absolute;
  font-size: 30px;

  transform: translateY(-12px) translateX(-17px);
}
</style>
