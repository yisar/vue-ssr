import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'component/hello/hello.vue'
import Item from '../component/item/item.vue'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/hello',
        component: Hello
      },
      {
        path: '/item/:id',
        component: Item
      }
    ]
  })
}