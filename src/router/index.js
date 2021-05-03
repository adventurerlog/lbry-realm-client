import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/signup',
    name: 'Auth',
    component: () => import(/* webpackChunkName: "auth" */ '../views/Auth.vue')
  },
  {
    path: '/channel/:id',
    name: 'Channel',
    props: true,
    component: () => import(/* webpackChunkName: "channel" */ '../views/Channel.vue')
  },
  {
    path: '/dashboard', // TODO: add auth to this route
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue')
  },
  {
    path: '/profile', // TODO: add auth to this route
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue')
  },
  {
    path:'/showcase',// TODO: make sure not to include this in production builds
    name:'Showcase',
    component: () => import(/* webpackChunkName: "showcase" */ '../views/Showcase.vue')
  },
  {
    path: '*',
    name:'404',
    component: () => import(/* webpackChunkName: "404" */ '../views/404.vue')
  }
]

Vue.use(VueRouter);
const router = new VueRouter({
  mode:'history',
  routes
})

export default router
