import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/components/views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/components/views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/components/views/Contact.vue')
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () => import('@/components/views/Signin.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
