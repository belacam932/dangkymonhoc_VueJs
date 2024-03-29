import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
import Edit from '@/views/EditView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router