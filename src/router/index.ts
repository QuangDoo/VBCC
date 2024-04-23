import { path } from '@/router/path'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import IntroductionView from '@/views/IntroductionView.vue'
import LookupView from '@/views/LookupView.vue'
import NewsView from '@/views/NewsView.vue'
import ServiceView from '@/views/ServiceView.vue'

const routes: RouteRecordRaw[] = [
  { path: path.introduction, component: IntroductionView, name: 'Giới thiệu' },
  { path: path.lookup, component: LookupView, name: 'Tra cứu' },
  { path: path.news, component: NewsView, name: 'Tin tức' },
  { path: path.services, component: ServiceView, name: 'dịch vụ' }
]

const router = createRouter({
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'exact-active-link',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
