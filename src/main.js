import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import {Message} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import App from './App.vue'
// import env from './env'

// mock开关 当mock为true时才会开启拦截
// mock修改成false,login才请求成功
const mock = false
if (mock) {
  require('./mock/api')
}
// 根据前端的跨域方式做调整  /a/b  访问的时候 /api/a/b 转发的时候 => /a/b
// 接口代理：就是当前接口的域名和我们前端的域名是一样的
axios.defaults.baseURL = '/api'
// 超时时间(一定要设置，否则影响用户体验)
axios.defaults.timeout = 8000
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL
// 接口错误拦截 interceptors 拦截器
axios.interceptors.response.use(function (response) {
  let res = response.data;  // 获取到接口的返回值
  let path = location.hash; //无论用户是否登录都有权访问首页
  // 状态码为0 表示成功  10表示未登录 跳转到登录界面
  if (res.status == 0) {
    return res.data
  } else if (res.status == 10) {
    if (path != '#/index') {
      window.location.href = '/#/login';
    }
    return Promise.reject(res);
    // window.location.href = '/#/login'
  } else {
    // alert(res.msg);
    Message.warning(res.msg)
    return Promise.reject(res);
  }
},(error)=>{
  let res = error.response;
  Message.error(res.data.message);
  return Promise.reject(error);
})

Vue.use(VueAxios, axios)
Vue.use(VueCookie)
// Vue.use(Message)
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})
// 通过原型的形式扩展一个对象
Vue.prototype.$message = Message
Vue.config.productionTip = false

new Vue({
  // 名字和属性一样的
  store,
  router,
  render: h => h(App),
}).$mount('#app')
