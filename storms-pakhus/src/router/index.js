import { createRouter, createWebHashHistory } from 'vue-router'
import Admin from '../views/Admin.vue'
import Boderne from '../views/Boderne.vue'
import LogIn from '../views/LogIn.vue'
import SignUp from '../views/SignUp.vue'
import Menu from '../views/Menu.vue'
  


const routes = [
  {
    path: '/',
    name: 'admin',
    component: Admin
  },
  {
    path: '/Boderne',
    name: 'boderne',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Boderne
  },
  {
    path: '/login',
    name: 'login',
    component: LogIn
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/Menu',
    name: 'Menu',
    component: Menu
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router
