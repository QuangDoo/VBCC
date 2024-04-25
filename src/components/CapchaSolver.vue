<template>
  <div class="capcha-solver-container">
    <div class="capcha-value-background">
      <p class="capcha-value-text">{{ capcha }}</p>
    </div>

    <div class="capcha-actions">
      <ButtonApp type="primary" title="Tải mã mới" @click="regenerateCapcha">
        <template #icon>
          <RevertIcon />
        </template>
      </ButtonApp>

      <ButtonApp type="primary" title="Đọc mã" @click="speakCapcha">
        <template #icon>
          <SpeakerIcon />
        </template>
      </ButtonApp>
    </div>
  </div>
</template>

<script setup lang="ts">
import RevertIcon from '@/assets/icons/RevertIcon.vue'
import SpeakerIcon from '@/assets/icons/SpeakerIcon.vue'
import ButtonApp from '@/components/Button/ButtonApp.vue'
import { generateRandomString } from '@/utils'

import { onMounted, ref } from 'vue'

// Generate initial captcha
const capcha = ref<string>(generateRandomString(6))

// Function to regenerate captcha
const regenerateCapcha = () => {
  capcha.value = generateRandomString(6)
}

// Function to speak captcha in Vietnamese
const speakCapcha = () => {
  const utterance = new SpeechSynthesisUtterance(capcha.value)
  utterance.lang = 'vi-VN' // Set the language to Vietnamese

  // Set the voice to the first Vietnamese voice found
  const voices = speechSynthesis.getVoices()
  utterance.voice = voices.find((voice) => voice.lang === 'vi-VN')

  // Fallback in case no Vietnamese voice is found
  if (!utterance.voice) {
    console.error('No Vietnamese voice found. Using default voice.')
  }

  speechSynthesis.speak(utterance)
}

// Ensure voices are loaded
onMounted(() => {
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = speakCapcha
  }
})
</script>

<style scoped>
.capcha-solver-container {
  display: flex;
  gap: 4px;
}
.capcha-value-background {
  background-image: url('@/assets/images/capcha.png');
  background-repeat: no-repeat;
  width: 100px;
  display: grid;
  place-content: center;
}
.capcha-value-text {
  text-align: center;
  color: black;
  font-size: 20px;
  font-weight: 500;
  border-radius: 4px;
}
.capcha-actions {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
</style>
