<template>
  <div class="steps-container">
    <div v-for="(step, index) in labels" :key="step" class="step-item" ref="stepRefs">
      <div class="step-number" :class="{ active: index <= active }">
        {{ index + 1 }}
      </div>
      <label class="label-text" :class="{ labelActive: index <= active }">{{ step }}</label>
      <!-- Render lines to the next step if not the last item -->

      <!-- width of label text / 2 to full fill the line -->
      <div
        v-if="index < labels.length - 1"
        class="lines"
        :style="{
          left: `${line_positions[index] - Math.floor(step_widths[index] / 2) + 35}px`,
          width: `${gap_width[index]}px`
        }"
      >
        <div
          v-for="(n, j) in num_lines[index]"
          :key="n"
          :class="{
            line: j !== 0 || j !== num_lines[index] - 1,
            rhombus: j === 0 || j === num_lines[index] - 1,
            active: index <= active
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, nextTick, onMounted, ref } from 'vue'

defineProps<{
  labels: string[]
  active: number
}>()

const stepRefs = ref<HTMLDivElement[]>([])
const gap_width = ref<number[]>([])
const num_lines = ref<number[]>([])
const line_positions = ref<number[]>([]) // Position for the start of lines
const step_widths = ref<number[]>([])

onMounted(() => {
  nextTick(() => {
    calculateGaps()
  })
})

function calculateGaps() {
  const steps = stepRefs.value
  if (steps.length > 1) {
    for (let i = 0; i < steps.length - 1; i++) {
      const endOfCurrent = steps[i].offsetLeft + steps[i].offsetWidth
      const startOfNext = steps[i + 1].offsetLeft
      const gap = startOfNext - endOfCurrent - 20 + steps[i].offsetWidth / 2 // Adjusting for 10px on each side of the steps
      gap_width.value[i] = gap
      num_lines.value[i] = Math.floor(gap / 15) // Each line with 5px gap
      line_positions.value[i] = steps[i].offsetWidth + 10 // Starting position 10px from the edge of step-number
      step_widths.value[i] = steps[i].offsetWidth
    }
  }
}
</script>

<style scoped>
.steps-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.step-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.step-number {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #d2d8df;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.active {
  background-color: #e28c45 !important;
}
.labelActive {
  color: #e28c45;
  font-weight: 700;
}

.label-text {
  margin-top: 8px;
  color: #d2d8df;
  white-space: wrap;
}

.labelActive {
  color: #e28c45;
}

.lines {
  position: absolute;
  top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
}

.line {
  width: 10px;
  height: 2px;
  background-color: #d2d8df;
}

.rhombus {
  width: 12px;
  height: 12px;
  background-color: #d2d8df;
  transform: rotate(45deg);
}
</style>
