import Vue from 'vue'
import Router from 'vue-router'
import ProductList from '@/components/ProductList'
import Todos from '@/components/Todos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/todo',
      name: 'Todos',
      component: Todos
    }
  ]
})
