import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin, AmplifyEventBus } from 'aws-amplify-vue'

Vue.use(Router)
Vue.use(AmplifyPlugin, AmplifyModules)

let user

getUser().then((user) => {
  if (user) {
    router.push({ path: '/' })
  }
})

function getUser () {
  return Vue.prototype.$Amplify.Auth.currentAuthenticatedUser().then((data) => {
    if (data && data.signInUserSession) {
      store.commit('setUser', data)
      return data
    }
  }).catch(() => {
    store.commit('setUser', null)
    return null
  })
}

AmplifyEventBus.$on('authState', async (state) => {
  if (state === 'signedOut') {
    user = null
    store.commit('setUser', null)
    router.push({ path: '/login' })
  } else if (state === 'signedIn') {
    user = await getUser()
    router.push({ path: '/' })
  }
})

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeResolve(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    user = await getUser()
    if (!user) {
      return next({
        path: '/login'
      })
    }
    return next()
  }
  return next()
})

export default router
