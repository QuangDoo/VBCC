import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import LayoutApp from '@/components/LayoutApp.vue'

const app = createApp(App)

app.component('LayoutApp', LayoutApp)

app.use(router).mount('#app')
