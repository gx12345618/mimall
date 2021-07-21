// import { resolve } from 'core-js/fn/promise'
import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
// import Login from './pages/login'
import Index from './pages/index'
// import Product from './pages/product'
// import Detail from './pages/detail'
// import Cart from './pages/cart'
// import Order from './pages/order'
// import OrderConfirm from './pages/orderConfirm'
// import OrderList from './pages/orderList'
// import OrderPay from './pages/orderPay'
// import AliPay from './pages/alipay'

// 通过vue去加载这个插件
Vue.use(Router)

// 导出
export default new Router({
    // 配置路由
    routes: [
        {
            path: '/',
            name: 'home',
            redirect: '/index',
            component: Home,
            children: [
                {
                    path: '/index',
                    name: 'index',
                    component: Index,
                }, {
                    // 动态路由 根据商品详情来加载页面信息 /:id
                    path: '/product/:id',
                    name: 'product',
                    // component: resolve => require(['./pages/index.vue'], resolve),
                    component: () => import('./pages/product.vue')
                }, {
                    path: '/detail/:id',
                    name: 'detail',
                    component: () => import('./pages/detail.vue')
                },
                
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./pages/login.vue')
        },
        {
            path: '/cart',
            name: 'cart',
            component: () => import('./pages/cart.vue')
        },
        {
            path: '/order',
            name: 'order',
            component: () => import('./pages/order.vue'),
            children: [
                {
                    path: 'confirm',
                    name: 'order-confirm',
                    component: () => import('./pages/orderConfirm.vue')
                },
                {
                    path: 'list',
                    name: 'order-list',
                    component: () => import('./pages/orderList.vue')
                },
                {
                    path: 'pay',
                    name: 'order-pay',
                    component: () => import('./pages/orderPay.vue')
                },
                {
                    path: 'alipay',
                    name: 'alipay',
                    component: () => import('./pages/alipay.vue')
                },
            ]
        },
        
    ]
});