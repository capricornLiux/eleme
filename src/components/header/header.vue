<template>
  <div class="header">
    <!--内容-->
    <div class="content-wrapper">

      <!--左侧头像-->
      <div class="avatar">
        <img v-bind:src="seller.avatar" width="64" height="64">
      </div>
      <!--左侧头像结束-->

      <!--右侧内容-->
      <div class="content">

        <!--头部上架名称-->
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <!--头部上架名称结束-->

        <!--商家信息-->
        <div class="desc">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
        <div v-if="seller.supports" class="supports">
          <span class="icon"></span>
          <span class="test">{{seller.supports[0].description}}</span>
        </div>
        <!--商家信息结束-->


      </div>
      <!--右侧内容结束-->

    </div>
    <!--内容结束-->

    <!--新闻公告-->
    <div class="bulletin-wrapper"></div>
    <!--新闻公告结束-->

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    // 接收父组件传递的数据
    props: {
      seller: {
        type: Object
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    color:rgb(255,255,255)
    background-color: #000
    .content-wrapper
      padding :24px 12px 18px 24px
      .avatar
        display: inline-block
      .content
        display: inline-block

</style>
