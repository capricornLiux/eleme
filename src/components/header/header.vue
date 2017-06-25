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
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
        <!--商家信息结束-->


      </div>
      <!--右侧内容结束-->

      <!--商家支持内容-->
      <div class="support-count" v-if="seller.supports">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
      <!--商家支持内容结束-->

    </div>
    <!--内容结束-->

    <!--新闻公告-->
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <!--新闻公告结束-->

    <!--头部背景-->
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%">
    </div>
    <!--头部背景结束-->

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    // 接收父组件传递的数据
    props: {
      seller: {
        type: Object
      }
    },

    mounted() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

  /*导入stylus*/
  @import "../../common/stylus/mixin.styl"
  /*css这里不能设置路径简写, js部分是可以的*/

  .header
    position: relative
    color: rgb(255, 255, 255)
    background-color: rgba(7, 17, 27, 0.5);
    .content-wrapper
      padding: 24px 12px 18px 24px

      position: relative

      /*解决头像和右侧文字之间有间隔空隙的问题, 设置父元素的字体大小为0(因为有空白字符导致的空隙问题)*/
      font-size: 0
      .avatar
        display: inline-block
        vertical-align: top
        img
          border-radius: 2px
      .content
        display: inline-block
        /*font-size: 14px*/
        margin-left: 16px
        .title
          margin-top: 2px
          margin-bottom: 8px
          .brand
            display: inline-block
            vertical-align: top
            width: 30px
            height: 18px
            bg-image("brand")
            /*还需要指定size和repeat*/
            background-size: 30px 18px
            background-repeat: no-repeat
          .name
            font-size: 16px
            font-weight: bold
            line-height: 18px
            margin-left: 6px
        .desc
          /*margin-top: 8px*/
          margin-bottom: 10px
          font-size: 12px
          line-height: 12px
        .supports
          /*display: inline-block*/
          .icon
            display: inline-block
            vertical-align: top
            width: 12px
            height: 12px
            margin-right: 4px
            /*font-size: 10px*/
            /*line-height: 12px*/
            background-size: 12px 12px
            background-repeat: no-repeat
            &.decrease
              bg-image('decrease_1')
            &.discount
              bg-image('discount_1')
            &.guarantee
              bg-image('guarantee_1')
            &.invoice
              bg-image('invoice_1')
            &.special
              bg-image('special_1')
          .text
            font-size: 10px
            line-height: 12px

      .support-count
        position: absolute
        right: 12px
        bottom: 18px
        height: 24px
        line-height: 24px
        padding: 0 8px
        border-radius: 12px
        background-color: skyblue
        text-align: center
        .count
          display: inline-block
          /*width: 10px*/
          font-size: 10px
        .icon-keyboard_arrow_right
          margin-left: 2px
          line-height: 24px
          font-size: 10px

    .bulletin-wrapper
      position: relative
      height: 28px
      line-height: 28px
      background-color: rgba(7, 17, 27, 0.2)
      /*padding:8px 12px;*/
      /*padding: 0 12px*/
      padding: 0 22px 0 12px
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      .bulletin-title
        display: inline-block
        vertical-align: top
        margin-top: 8px
        width: 22px
        height: 12px
        bg-image('bulletin')
        background-size: 22px 12px
        background-repeat: no-repeat
      /*margin-right: 4px*/
      .bulletin-text
        vertical-align: top
        font-size: 10px
        line-height: 28px
        margin-right: 4px
        margin-left: 4px
      .icon-keyboard_arrow_right
        position: absolute
        right: 12px
        top: 8px
        font-size: 10px
    .background
      position: absolute
      top: 0
      left: 0
      z-index: -1
      width: 100%
      height: 100%
      filter: blur(5px)
</style>
