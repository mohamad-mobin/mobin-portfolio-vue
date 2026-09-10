import { createRouter, createWebHashHistory } from 'vue-router'

import home from '../views/home.vue'
import about from '../views/about.vue'
import projects from '@/views/projects.vue'

const routes = [
  { path: '/', meta:{title: 'Home'}, component: home, name: 'home' },
  { path: '/about', meta:{title: 'About'}, component: about, name: 'about' },
  { path: '/projects', meta:{title: 'Projects'}, component: projects, name: 'projects' }
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

router.afterEach((to) => {
  document.title = to.meta.title
})

export default router
