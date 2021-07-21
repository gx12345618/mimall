// 主页面
<template>
    <div>
        <!-- 嵌套视图，避免每一个页面都导入一遍 -->
        <nav-header></nav-header>
        <router-view></router-view>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import NavHeader from './../components/NavHeader'
import NavFooter from './../components/NavFooter'

export default {
    name:'nav-home',
    components:{
        NavHeader,
        NavFooter
    }
}
</script>