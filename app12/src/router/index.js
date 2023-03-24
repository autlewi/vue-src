import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import ItemsView from '../views/home/ItemsView.vue'
import App from '../../../app12/src/App.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/items/',
      name: 'List of Shirts',
      component: ItemsView
    },
    {
      path: '/items/:id',
      name: 'Shirt Information:',
      component: ItemsView
    }
  ]
})

export default router
