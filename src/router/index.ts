import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import LiveData from '../views/LiveData.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/live-data',
      name: 'live-data',
      component: LiveData
    },
    {
      path: '/',
      name: 'app',
      component: LandingPage
    }
  ]
})

export default router
