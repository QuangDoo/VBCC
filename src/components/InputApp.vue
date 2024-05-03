<script setup lang="ts">
import { ref } from 'vue'

interface InputAppProps {
  error?: boolean
  label?: string
  placeholder?: string
  onChange?: (value: any) => void
  type?: 'text' | 'number'
  required?: boolean
}

const { error, label, placeholder, onChange, type } = withDefaults(defineProps<InputAppProps>(), {
  placeholder: 'Nhập ...',
  type: 'text'
})

const isFocus = ref<boolean>(false)
const inputValue = ref<string>('')

function toggleFocus() {
  isFocus.value = !isFocus.value
}

function onChangeInput(event: Event) {
  const { value } = event.target as HTMLInputElement

  if (type === 'number') {
    inputValue.value = value.replace(/[^0-9]/g, '')
    onChange?.(inputValue.value)

    return
  }

  onChange?.(inputValue.value)
}
</script>

<template>
  <div>
    <div class="label-container">
      <label :for="label" class="label">{{ label }}</label>

      <span class="requeired" style="font-size: 12px" v-if="required">*</span>
    </div>

    <div class="input-container" :class="{ focus: isFocus, error: error }">
      <slot name="prefix" v-if="$slots.prefix" />

      <input
        class="input"
        v-model="inputValue"
        :placeholder="placeholder"
        @focus="toggleFocus"
        @blur="toggleFocus"
        v-bind="$attrs"
        @input="onChangeInput"
        type="text"
      />

      <slot name="suffix" v-if="$slots.suffix" />
    </div>
    <p class="error-text" v-if="error">Nhập vô rồi ấn nút tìm kiếm mấy bà nội!</p>
  </div>
</template>

<style scoped>
.label-container {
  display: flex;
  gap: 1px;
}
.label {
  flex-shrink: 0;
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
.input-container {
  padding: 8px 12px;
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
}
.input {
  outline: none;
  border: none;
  width: 100%;
}
.error-text {
  color: #e02b1d;
  font-size: 12px;
  margin-top: 4px;
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
