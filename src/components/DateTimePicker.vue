<!-- eslint-disable vue/no-parsing-error -->
<script setup lang="ts">
import CalendarIcon from '@/assets/icons/CalendarIcon.vue'
import InputApp from '@/components/InputApp.vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { computed, ref, watch } from 'vue'

const locales = {
  vi: {
    // Define week days starting from Sunday
    weekdays: ['CN', 'Th2', 'Th3', 'Th4', 'Th5', 'Th6', 'Th7'],
    // Define months
    months: [
      'Tháng Một',
      'Tháng Hai',
      'Tháng Ba',
      'Tháng Tư',
      'Tháng Năm',
      'Tháng Sáu',
      'Tháng Bảy',
      'Tháng Tám',
      'Tháng Chín',
      'Tháng Mười',
      'Tháng Mười Một',
      'Tháng Mười Hai'
    ],
    firstDayOfWeek: 0, // Set Sunday as the first day of the week
    format: 'dd/MM/yyyy',
    fullFormat: 'PP',
    today: 'Hôm nay',
    clear: 'Xóa'
  }
}

const { picker, modelValue } = withDefaults(
  defineProps<{
    label: string
    required?: boolean
    placeholder?: string
    clearIcon?: boolean
    error?: boolean
    picker?: 'date' | 'month' | 'year'
    modelValue?: Date
  }>(),
  { clearIcon: true, picker: 'date' }
)

const emit = defineEmits(['clear', 'update:modelValue'])

const pickerMode = computed(() => picker)

const DAY_NAMES = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN']

const format = computed(() => {
  return (date: Date) => {
    const day = date.getDate().toString()
    const month = date.getMonth() + 1 + ''
    const year = date.getFullYear() + ''

    switch (picker) {
      case 'date':
        return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`
      case 'month':
        return `${month.padStart(2, '0')}/${year}`

      default:
        return `${year}`
    }
  }
})

// Define the local state for the date
const localDate = ref<Date | null>(modelValue)

watch(localDate, (newValue) => {
  emit('update:modelValue', newValue)
})

function handleClear() {
  localDate.value = null // This will trigger the watcher and emit the change
}
</script>
<template>
  <div class="date-picker" style="height: 69px">
    <VueDatePicker
      text-input
      auto-apply
      :action-row="{ showNow: false, showClear: false }"
      v-bind="$attrs"
      :format="format"
      weekStart="1"
      :month-picker="pickerMode === 'month'"
      :year-picker="pickerMode === 'year'"
      :day-picker="pickerMode === 'date'"
      :day-names="DAY_NAMES"
      :locales="locales"
      locale="vi"
    >
      <template #dp-input="{ value }">
        <InputApp
          :placeholder="placeholder"
          :label="label"
          :required="required"
          readonly
          type="text"
          :value="value"
          :error="error"
        >
          <template #suffix>
            <CalendarIcon v-if="!value" />

            <button
              class=""
              v-if="clearIcon && value"
              style="font-size: 16px; outline: none; opacity: 0.5"
              @click="handleClear"
            >
              x
            </button>
          </template>
        </InputApp>
      </template>

      <template #clear-icon>
        {{ null }}
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
