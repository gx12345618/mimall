<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{username}}</a>
          <a href="javascript:;" v-if="!username" @click="login">登录</a>
          <a href="javascript:;" v-if="username" @click="logout">退出</a>
          <a href="/#/order/list" v-if="username">我的订单</a>
          <a href="javascript:;" class="my-cart"
            @click="goToCart"><span class="icon-cart"></span>购物车({{cartCount}})</a
          >
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <!-- 
            超链接的 URL。可能的值：
            绝对 URL - 指向另一个站点（比如 href="http://www.example.com/index.htm"）
            相对 URL - 指向站点内的某个文件（href="index.htm"）
            锚 URL   - 指向页面中的锚（href="#top"）
          -->
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item,index) in phoneList" :key="index">
                  <!-- a标签可以通过target方式打开新窗口 -->
                  <a v-bind:href="'/#/product'+item.id" target="_blank">
                    <div>
                      <div class="pro-img">
                        <img :src="item.mainImage" :alt="item.subtitle">
                      </div>
                      <div class="pro-name">{{item.name}}</div>
                      <div class="pro-price">{{item.price | currency}}</div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
            <div class="children">
              <ul>
                <li class="product">
                  <!-- a标签可以通过target方式打开新窗口 -->
                  <a href="" target="_blank">
                    <div>
                      <div class="pro-img">
                        <img src="../../public/imgs/nav-img/nav-1.png" alt="" />
                      </div>
                      <div class="pro-name">小米CC9</div>
                      <div class="pro-price">1799元</div>
                    </div>
                  </a>
                </li>
                <li class="product">
                  <!-- a标签可以通过target方式打开新窗口 -->
                  <a href="" target="_blank">
                    <div>
                      <div class="pro-img">
                        <img src="../../public/imgs/nav-img/nav-2.png" alt="" />
                      </div>
                      <div class="pro-name">小米CC9</div>
                      <div class="pro-price">1799元</div>
                    </div>
                  </a>
                </li>
                <li class="product">
                  <!-- a标签可以通过target方式打开新窗口 -->
                  <a href="" target="_blank">
                    <div>
                      <div class="pro-img">
                        <img src="../../public/imgs/nav-img/nav-3.png" alt="" />
                      </div>
                      <div class="pro-name">小米CC9</div>
                      <div class="pro-price">1799元</div>
                    </div>
                  </a>
                </li>
                <li class="product">
                  <!-- a标签可以通过target方式打开新窗口 -->
                  <a href="" target="_blank">
                    <div>
                      <div class="pro-img">
                        <img src="../../public/imgs/nav-img/nav-4.png" alt="" />
                      </div>
                      <div class="pro-name">小米CC9</div>
                      <div class="pro-price">1799元</div>
                    </div>
                  </a>
                </li>
                <li class="product">
                  <!-- a标签可以通过target方式打开新窗口 -->
                  <a href="" target="_blank">
                    <div>
                      <div class="pro-img">
                        <img src="../../public/imgs/nav-img/nav-5.png" alt="" />
                      </div>
                      <div class="pro-name">小米CC9</div>
                      <div class="pro-price">1799元</div>
                    </div>
                  </a>
                </li>
                <li class="product">
                  <!-- a标签可以通过target方式打开新窗口 -->
                  <a href="" target="_blank">
                    <div>
                      <div class="pro-img">
                        <img src="../../public/imgs/nav-img/nav-6.png" alt="" />
                      </div>
                      <div class="pro-name">小米CC9</div>
                      <div class="pro-price">1799元</div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-1.jpg'" alt="" />
                    </div>
                    <div class="pro-name">小米壁画电视 65英寸</div>
                    <div class="pro-price">6999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-2.jpg'" alt="" />
                    </div>
                    <div class="pro-name">小米全面屏电视E55A</div>
                    <div class="pro-price">1999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-3.png'" alt="" />
                    </div>
                    <div class="pro-name">小米电视4A 32英寸</div>
                    <div class="pro-price">699元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-4.jpg'" alt="" />
                    </div>
                    <div class="pro-name">小米电视4A 55英寸</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-5.jpg'" alt="" />
                    </div>
                    <div class="pro-name">小米电视4A 65英寸</div>
                    <div class="pro-price">2699元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-6.png'" alt="" />
                    </div>
                    <div class="pro-name">查找全部</div>
                    <div class="pro-price">小米电视</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" />
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import {mapState} from 'vuex'
export default {
  name: "nav-header",
  data() {
    return {
      // username:this.$store.state.username,
      // username: "jack",
      phoneList: [],
    }
  },
  // 解决数据延迟问题
  computed:{
    username(){
      return this.$store.state.username
    },
    cartCount(){
      return this.$store.state.cartCount
    }
    // ...mapState(['username','cartCount'])
  },
  // 用于金额格式化 日期格式化
  filters:{
    currency(val){
      if(!val) return '0.00';
      return '￥' + val.toFixed(2) + '元';
    }
  },
  mounted() {
    this.getProductList();
    // this.$route表示当前路由的实例 而router是全局的路由，整个路由都在里面 获取参数用route
    let params = this.$route.params
    if(params && params.from == 'login'){
      this.getCartCount();
    }
  },
  methods: {
    login(){
      this.$router.push('/login')
    },
    getProductList() {
      this.axios
        // get请求传参用params
        .get("/products", {
          params: {
            categoryId: "100012",
            pageSize:6,
          }
        })
        // 通过then来接收返回值
        .then((res) => {
          if (res.list.length >= 6) {
            this.phoneList = res.list.slice(0, 6);
          }
        });
    },
    logout(){
       this.axios.post("/user/logout").then(()=>{
            this.$message.success('退出成功');
            this.$cookie.set('userId','',{expires:'-1'});
            this.$store.dispatch('saveUserName','');
            this.$store.dispatch('saveCartCount','0');
          })
    },
    goToCart(){
      // 通过this.$router.push()的方式跳转路由
      this.$router.push('/cart')
    }
  },
};
</script>

<style lang="scss">
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    .container {
      @include flex;
      // display: flex;
      // justify-content: space-between; //水平居中 两边对齐
      // align-items: center; //垂直居中
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart {
        width: 110px;
        background-color: #ff6600;
        text-align: center;
        color: #ffffff;
        margin-right: 0;
      }
      .icon-cart {
        @include bgImg(16px, 12px, "/imgs/icon-cart-checked.png");
        // 给span设置高度和宽度购物车的图标才会显示出来
        // display: inline-block;
        // width: 16px;
        // height: 12px;
        // background: url('/imgs/icon-cart-checked.png') no-repeat center;
        // // contain 填充 填满
        // background-size: contain;
        margin-right: 4px;
      }
    }
  }
  .nav-header {
    .container {
      position: relative;
      height: 112px;
      @include flex;
      // display: flex;
      // justify-content: space-between;
      // align-items: center;
      .header-menu {
        // 行内块元素
        display: inline-block;
        width: 643px;
        padding-left: 209px;
        .item-menu {
          // inline-block 才能横着排  如果是block就竖着排
          display: inline-block;
          color: #333333;
          font-size: 16px;
          font-weight: bold;
          line-height: 112px;
          margin-right: 20px;
          span {
            // 鼠标移入字体会出现一个小手
            cursor: pointer;
          }
          &:hover {
            color: $colorA;
            .children {
              height: 220px;
              opacity: 1;
            }
          }
          .children {
            position: absolute;
            top: 112px;
            left: 0;
            width: 1226px;
            height: 0;
            opacity: 0; //从 0.0 （完全透明）到 1.0（完全不透明）
            overflow: hidden; //隐藏
            border-top: 1px solid #e5e5e5;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            z-index: 10;
            transition: all 0.5s;
            background-color: #ffffff;
            .product {
              position: relative;
              // 向左浮动
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              // 用伪类设置分割线
              &:before {
                content: " "; //占位作用
                position: absolute;
                top: 28px;
                right: 0;
                border-left: 1px solid $colorF;
                width: 1px;
                height: 100px;
              }
              &:last-child:before {
                display: none;
              }
              a {
                display: inline-block;
              }
              img {
                width: auto;
                height: 111px;
                margin-top: 26px;
              }
              .pro-img {
                height: 137px;
              }
              .pro-name {
                height: 12px;
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
              }
              .pro-price {
                height: 12px;
              }
            }
          }
        }
      }
      .header-search {
        width: 319px;
        .wrapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input {
            border: none;
            box-sizing: border-box;
            border-right: 1px solid #e0e0e0;
            width: 264px;
            height: 50px;
            padding-left: 14px;
          }
          a {
            // 背景图片一般都会定义为inline-block
            @include bgImg(18px, 18px, "../../public/imgs/icon-search.png");
            margin-left: 17px;
          }
        }
      }
    }
  }
}
</style>