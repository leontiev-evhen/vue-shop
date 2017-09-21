import Vue from 'vue'
import Router from 'vue-router'
import ProductList from '@/components/ProductList'
import ProductInfo from '@/components/ProductInfo'
import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/product/:id',
      name: 'ProductInfo',
      component: ProductInfo
    },
	{
      path: '*',
      name: 'PageNotFound ',
      component: PageNotFound 
    },
  ]
})
