import { createRouter, createWebHistory } from 'vue-router'

import store from '../store'
import TestDashboard from '../components/test-dashboard'
import NotFound from '../components/not-found'
import ChoosePage from '../components/choose-page'
import UserDashboard from '../components/user-dashboard'
import DateTest from '../components/date-test'
import {
  ROUTE_SIGN_IN,
  ROUTE_SIGN_UP,
  ROUTE_DASHBOARD,
  ROUTE_DATE_TEST,
} from './constants'

const routes = [
  {
    path: '/sign-up',
    component: () => import('../components/auth/sign-up'),
    name: 'SignUp',
  },
  {
    path: ROUTE_SIGN_IN,
    component: () => import('../components/auth/sign-in'),
    name: 'SignIn',
  },
  {
    path: '/',
    component: ChoosePage,
    name: 'StartServe',
  },
  {
    path: '/test-backend-requests',
    component: () => import('../components/test-backend-requests'),
    name: 'TestBackendRequests',
  },
  {
    path: ROUTE_DASHBOARD,
    component: TestDashboard,
    name: 'TestDashboard',
  },
  {
    path: ROUTE_DATE_TEST,
    component: DateTest,
    name: 'DateTest',
  },
  {
    path: '/user-dashboard',
    component: UserDashboard,
    name: 'UserDashboard',
  },
  {
    path: '/404NotFound',
    component: NotFound,
    name: '404NotFound',
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound,
    name: 'NotFound',
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((
  to,
  from,
  next,
  ) => {
  const isAuthenticated = store.getters['auth/isAuthenticated']
  const authPaths = [ROUTE_SIGN_IN, ROUTE_SIGN_UP]
  console.log('In before Each')

  if (isAuthenticated) {
    console.log('Auth true')

    if (authPaths.includes(to.path)) {
      next(ROUTE_DASHBOARD)
    } else {
      next()
    }
  } else if (to.path === ROUTE_SIGN_IN || to.path === ROUTE_SIGN_UP) {
    console.log('Auth false')
    next()
  } else {
    next(ROUTE_SIGN_IN)
  }
})

export default router
