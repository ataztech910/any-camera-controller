import { RouteConfig } from 'vue-router'
import store from '../store'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '',
        component: () => import('pages/Index.vue'),
        beforeEnter: (to, from, next) => {
          console.log(store.getters['auth/isLoggedIn'])
          if(store.getters['auth/isLoggedIn']) {
            next();
          } else {
            console.log('unauthenticated');
            next('/login');
          }
        }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
