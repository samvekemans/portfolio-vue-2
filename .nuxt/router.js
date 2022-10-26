import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2b19b81c = () => interopDefault(import('../pages/about-me.vue' /* webpackChunkName: "pages/about-me" */))
const _4a878614 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _7303d330 = () => interopDefault(import('../pages/my-work.vue' /* webpackChunkName: "pages/my-work" */))
const _6b2ba22a = () => interopDefault(import('../pages/my-work/index.vue' /* webpackChunkName: "pages/my-work/index" */))
const _0204c709 = () => interopDefault(import('../pages/my-work/_work.vue' /* webpackChunkName: "pages/my-work/_work" */))
const _68ef1028 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about-me",
    component: _2b19b81c,
    name: "about-me"
  }, {
    path: "/contact",
    component: _4a878614,
    name: "contact"
  }, {
    path: "/my-work",
    component: _7303d330,
    children: [{
      path: "",
      component: _6b2ba22a,
      name: "my-work"
    }, {
      path: ":work",
      component: _0204c709,
      name: "my-work-work"
    }]
  }, {
    path: "/",
    component: _68ef1028,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
