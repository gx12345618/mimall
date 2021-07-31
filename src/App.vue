<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import storage from './storage'
export default {
  name: "app",
  components: {},
  data() {
    return {
      // res: {},
    };
  },
  mounted() {
    if(this.$cookie.get('userId')){
      this.getUser();
      this.getCartCount();
    }
  },
  methods: {
    getUser() {
      // 未登录时res为undefined 为防止报错 给一个空对象
      this.axios.get("/user").then((res={}) => {
        // 保存到vuex里面
        this.$store.dispatch('saveUserName',res.username);
      });
    },
    getCartCount() {
      // 没有登录 保证购物车数量为0
      this.axios.get("/carts/products/sum").then((res=0) => {
        this.$store.dispatch('saveCartCount',res);
      });
    },
  },
};
</script>

<style lang="scss">
@import "./assets/scss/reset.scss";
@import "./assets/scss/config.scss";
@import "./assets/scss/button.scss";
</style>
