import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

const Home = resolve => require(['../components/Home.vue'], resolve)
const Order = resolve => require(['../components/order/Index'], resolve)
const OrderIndex = resolve => require(['../components/order/index/OrderIndex'], resolve)
const ProductDetail = resolve => require(['../components/product/ProductDetail'], resolve)
const CartProduct = resolve => require(['../components/cart/CartProduct'], resolve)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/', // 首页
      name: 'Home',
      component: Home,
      meta: {
        title: 'home',
        savedPosition: 0,
        keepAlive: true // 针对不同路由设置缓存
      }
    }, {
      path: '/order', // 订单
      name: 'Order',
      component: Order
    }, {
      path: '/productDetail',
      name: 'ProductDetail',
      component: ProductDetail
    }, {
      path: '/cartProduct',
      name: 'CartProduct',
      component: CartProduct
    }, {
      path: '/orderIndex',
      name: 'OrderIndex',
      component: OrderIndex
    }
  ]
})
