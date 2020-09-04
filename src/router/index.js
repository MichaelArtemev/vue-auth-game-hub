import Vue from 'vue'
import Router from 'vue-router'
import MainAuth from '@/components/core/MainAuth'
import Register from '@/components/Register'
import GameHub from "@/components/core/GameHub"
import NotFound from "@/components/core/404"
import Snake from "@/components/core/Snake"
import Poker from "@/components/core/Poker"

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'MainAuth',
      component: MainAuth,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem("jwt")) {
          next({
            name: "GameHub"
          });
        } else {
          next();
        }
      },
      meta: {

      }
    },
    // {
    //     path: '/register',
    //     name: 'register',
    //     component: Register,
    //     meta: { 
    //         guest: true
    //     }
    // },
    {
      path: '/dashboard',
      name: 'GameHub',
      component: GameHub,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/snake',
      name: 'Snake',
      component: Snake,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/poker',
      name: 'Poker',
      component: Poker,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/',
        params: {
          nextUrl: to.fullPath
        }
      })
    } else {
      let user = JSON.parse(localStorage.getItem('user'))
      if (to.matched.some(record => record.meta.is_admin)) {
        if (user.is_admin == 1) {
          next()
        } else {
          next({
            name: 'userboard'
          })
        }
      } else {
        next()
      }
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem('jwt') == null) {
      next()
    } else {
      next({
        name: 'userboard'
      })
    }
  } else {
    next()
  }
})

export default router
