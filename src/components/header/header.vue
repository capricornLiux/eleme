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

  /*导入stylus*/
  @import "../../common/stylus/mixin.styl"
  /*css这里不能设置路径简写, js部分是可以的*/

  .header
    color: rgb(255, 255, 255)
    background-color: #000
    .content-wrapper
      padding: 24px 12px 18px 24px

      /*解决头像和右侧文字之间有间隔空隙的问题, 设置父元素的字体大小为0(因为有空白字符导致的空隙问题)*/
      font-size: 0
      .avatar
        display: inline-block
      .content
        display: inline-block
        font-size: 14px
        margin-left: 16px
        .title
          margin-top: 2px
          margin-bottom: 8px
          .brand
            display: inline-block
            width: 30px
            height: 18px
            bg-image("brand")
            /*还需要指定size和repeat*/
            background-size: 30px 18px
            background-repeat: no-repeat

</style>
