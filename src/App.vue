<template>
  <div class="wrap">
    <!--<img src="./assets/logo.png">-->
    <!--<hello></hello>-->

    <!--<div class="header">-->
    <!--<header></header>-->
    <!--</div>-->
    <v-header :seller="seller"></v-header>

    <div class="tab border-1px">
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
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>

  </div>
</template>

<script>
  // import Hello from './components/Hello';
  import header from './components/header/header.vue';

  // 定义状态码的含义(如果状态码更改了, 只在这里更改就可以了)
  const ERROR_OK = 0;

  export default {
    name: 'app',
    components: {
//    Hello
      'v-header': header
    },

    data() {
      return {
        seller: {}
      };
    },

    // 使用生命周期函数
    mounted() {
      this.$http.get('/api/seller').then((res) => {
//        console.log(res);
//        console.log(res.json());
//        console.log(res.data.data);
//        res.data.error.log

        // 判断错误码
        if (res.data.errno === ERROR_OK) {
          // 正确
          console.log('test');
          this.seller = res.data.data;
        }
      });
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

  // 导入mixin
  @import "./common/stylus/mixin.styl"

  /*使用flex布局*/
  .wrap
    .tab
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      /*border-bottom: 1px solid black*/

      /*使用mixin*/
      border-1px(rgba(7, 17, 27, 0.1))

      .tab-item
        flex: 1
        text-align: center
        & > a
          /*让字体的空白部分点击也有效果*/
          display: block
          font-size: 14px
          color: rgb(77, 85, 93)
          /*css样式重绘/重拍的规范*/
          /*&.router-link-active
            color:rgb(240,20,20)*/

          /*使用手动配置的class进行激活状态设置*/
          &.active
            color: rgb(240, 20, 20)


</style>
