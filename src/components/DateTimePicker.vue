<!-- eslint-disable vue/no-parsing-error -->
<script setup lang="ts">
import CalendarIcon from '@/assets/icons/CalendarIcon.vue'
import InputApp from '@/components/InputApp.vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

withDefaults(
  defineProps<{
    label: string
    required?: boolean
    placeholder?: string
    clearIcon?: boolean
  }>(),
  { clearIcon: true }
)

defineEmits(['clear'])
</script>
<template>
  <div>
    <div class="date-picker" style="height: 69px">
      <VueDatePicker
        text-input
        auto-apply
        :action-row="{ showNow: false, showClear: false }"
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
              <CalendarIcon v-if="!value" />

              <button
                class=""
                v-if="clearIcon && value"
                style="font-size: 16px; outline: none; opacity: 0.5"
                @click="$emit('clear')"
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
