<template>
  <div class="checkbox-container">
    <input type="checkbox" class="gradient-checkbox" v-bind="$attrs" :id="label" />
    <label class="label" :for="label" style="cursor: pointer">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
interface CheckboxAppProps {
  label?: string
}
defineProps<CheckboxAppProps>()
</script>

<style scoped>
.checkbox-container {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.gradient-checkbox {
  -webkit-appearance: none; /* Removes default styles provided by the browser */
  appearance: none;
  background-color: #fff; /* White background */
  width: 14px; /* Width of the checkbox */
  height: 14px; /* Height of the checkbox */
  border: 2px solid transparent; /* Transparent border to allow gradient to show */
  border-image: linear-gradient(to right, #11277c, #0000c5) 1; /* Gradient border */
  position: relative; /* Necessary for positioning the pseudo-element */
  cursor: pointer; /* Changes cursor to pointer on hover */
  outline: none;
}

.gradient-checkbox:checked {
  background-color: #0000c5; /* Color when checkbox is checked */
  background-image: url();
}

.gradient-checkbox:checked::before {
  content: '✓'; /* Unicode character for the check mark */
  color: white; /* Color of the check mark */
  position: absolute; /* Positions the check mark inside the checkbox */
  left: 0px; /* Horizontal position of the check mark */
  top: -6px; /* Vertical position of the check mark */
  font-size: 16px; /* Size of the check mark */
}
</style>
