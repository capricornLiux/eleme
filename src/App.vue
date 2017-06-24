<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<hello></hello>-->

    <!--<div class="header">-->
    <!--<header></header>-->
    <!--</div>-->
    <v-header></v-header>

    <div class="tab">
      <div class="tab-item">商品</div>
      <div class="tab-item">评论</div>
      <div class="tab-item">商家</div>
    </div>

    <div class="content">
      content
    </div>

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
    #app
      .tab
        display: flex
        width: 100%
        height: 40px
        line-height: 40px
        .tab-item
          flex: 1
          text-align: center

</style>
