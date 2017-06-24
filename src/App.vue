<template>
  <div class="wrap">
    <!--<img src="./assets/logo.png">-->
    <!--<hello></hello>-->

    <!--<div class="header">-->
    <!--<header></header>-->
    <!--</div>-->
    <v-header></v-header>

    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>

    <!--<div class="content">-->
      <!--content-->
    <!--</div>-->

    <!--使用路由出口-->
    <router-view></router-view>

  </div>
</template>

<script>
  // import Hello from './components/Hello';
  import header from './components/header/header.vue';
  export default {
    name: 'app',
    components: {
//    Hello
      'v-header': header
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

    /*使用flex布局*/
    .wrap
      .tab
        display: flex
        width: 100%
        height: 40px
        line-height: 40px
        .tab-item
          flex: 1
          text-align: center
          & > a
            /*让字体的空白部分点击也有效果*/
            display: block
            font-size: 14px
            color:rgb(77,85,93)
            /*css样式重绘/重拍的规范*/
            /*&.router-link-active
              color:rgb(240,20,20)*/

            /*使用手动配置的class进行激活状态设置*/
            &.active
              color:rgb(240,20,20)


</style>
