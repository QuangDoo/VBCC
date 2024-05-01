import { path } from '@/router/path'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import IntroductionView from '@/views/IntroductionView.vue'
import LookupView from '@/views/LookupView.vue'
import NewsView from '@/views/NewsView.vue'
import ServiceView from '@/views/ServiceView.vue'
import CertificateNumberTab from '@/components/LookupView/CertificateNumberTab.vue'
import NameTab from '@/components/LookupView/NameTab.vue'
import UserIdCardNumberTab from '@/components/LookupView/UserIdCardNumberTab.vue'

const routes: RouteRecordRaw[] = [
  { path: path.introduction, component: IntroductionView, name: 'Giới thiệu' },
  {
    path: path.lookup,
    component: LookupView,
    name: 'Tra cứu',
    children: [
      { path: '', component: CertificateNumberTab, name: 'Tra cứu theo số hiệu' },
      { path: 'tra-cuu-theo-ten', component: NameTab, name: 'Tra cứu theo tên' },
      { path: 'tra-cuu-theo-cccd', component: UserIdCardNumberTab, name: 'Tra cứu theo CCCD' }
    ]
  },
  { path: path.news, component: NewsView, name: 'Tin tức' },
  {
    path: path.services, component: ServiceView, name: 'dịch vụ',  children: [
      { path: '', component: CertificateNumberTab, name: 'Tra cứu theo số hiệu' },
      { path: 'tra-cuu-theo-ten', component: NameTab, name: 'Tra cứu theo tên' },
      { path: 'tra-cuu-theo-cccd', component: UserIdCardNumberTab, name: 'Tra cứu theo CCCD' }
    ]}
]

const router = createRouter({
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'exact-active-link',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
