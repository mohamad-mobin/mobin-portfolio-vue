import { createRouter, createWebHashHistory } from 'vue-router'

import home from '../views/home.vue'
import about from '../views/about.vue'
import projects from '@/views/projects.vue'

const routes = [
  { path: '/', component: home, name: 'home' },
  { path: '/about', component: about, name: 'about' },
  { path: '/projects', component: projects, name: 'projects' }
]

const router = createRouter({
  history: createWebHashHistory('/mobin-portfolio-vue/'),
  routes,
  scrollBehavior() {
    return{
        top: 0,
        behavior: 'smooth'
    }
  }
})

export default router
