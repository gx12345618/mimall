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
            home: 'home',
            redirect: '/index',
            component: Home,
            children: [
                {
                    path: '/index',
                    home: 'index',
                    component: Index,
                }, {
                    // 动态路由 根据商品详情来加载页面信息 /:id
                    path: '/product/:id',
                    home: 'product',
                    // component: resolve => require(['./pages/index.vue'], resolve),
                    component: () => import('./pages/product.vue')
                }, {
                    path: '/detail/:id',
                    home: 'detail',
                    component: () => import('./pages/detail.vue')
                },
                
            ]
        },
        {
            path: '/login',
            home: 'login',
            component: () => import('./pages/login.vue')
        },
        {
            path: '/cart',
            home: 'cart',
            component: () => import('./pages/cart.vue')
        },
        {
            path: '/order',
            home: 'order',
            component: () => import('./pages/order.vue'),
            children: [
                {
                    path: 'confirm',
                    home: 'order-confirm',
                    component: () => import('./pages/orderConfirm.vue')
                },
                {
                    path: 'list',
                    home: 'order-list',
                    component: () => import('./pages/orderList.vue')
                },
                {
                    path: 'pay',
                    home: 'order-pay',
                    component: () => import('./pages/orderPay.vue')
                },
                {
                    path: 'alipay',
                    home: 'alipay',
                    component: () => import('./pages/alipay.vue')
                },
            ]
        },
        
    ]
});