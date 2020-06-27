import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RegisterPatient from '../views/RegisterPatient.vue'
import RegisterDoctor from '../views/RegisterDoctor.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/RegisterPatient',
    name: 'RegisterPatient',
    component: RegisterPatient
  },
  {
    path: '/RegisterDoctor',
    name: 'RegisterDoctor',
    component: RegisterDoctor
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
