import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/views/View-Home.vue")
  },
  {
    path: "/about",
    component: () => import("@/views/View-About.vue")
  },
  {
    path: "/tools/skin",
    component: () => import("@/views/Tools/View-T-Skin.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
