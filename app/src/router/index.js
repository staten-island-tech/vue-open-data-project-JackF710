import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChartView from '@/views/ChartView.vue'

  const routes = [
    {path: '/', component: HomeView},
    {
      path: '/chartview',
      name: 'chartview',
      component: ChartView,
    }
    
  ]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
