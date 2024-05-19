import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=> import('../components/home.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: ()=> import('../components/about.vue'),
  },
  {
    path: '/galerija',
    name: 'galerija',
    component: ()=> import('../components/galerija.vue'),
  },
  {
    path: '/kontakt',
    name: 'Kontakt',
    component: ()=> import('../components/kontakt.vue'),
  },
  {
    path: '/meni',
    name: 'meni',
    component: ()=> import('../components/meni.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: ()=> import('../components/kontakt.vue'),
  },
  {
    path: "/:pathMatch(.*)*",
    name: '404',
    component: () => import('../components/404.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { top:0 }
  }
})

export default router