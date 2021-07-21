import Vue from 'vue'
import Vuex from 'vuex'
// 引入自己模块的时候要加'./'，否则会当成插件去node_modules中查找
import mutations from './mutations'
import actions from './action'
// 应用插件
Vue.use(Vuex)

const state = {
    username:'',//登录用户名
    cartCount:0 //购物车商品数量
}
export default new Vuex.Store({
    state,
    mutations,
    actions
})