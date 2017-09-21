import Vue from 'vue'
import Router from 'vue-router'
import ProductList from '@/components/product/ProductList'
import ProductInfo from '@/components/product/ProductInfo'
import Bag from '@/components/bag/Bag'
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
      path: '/bag',
      name: 'bag',
      component: Bag
    },
	{
      path: '*',
      name: 'PageNotFound ',
      component: PageNotFound 
    },
  ]
})
