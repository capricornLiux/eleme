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
      <div class="support-count" v-if="seller.supports" @click="showDetail">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
      <!--商家支持内容结束-->

    </div>
    <!--内容结束-->

    <!--新闻公告-->
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <!--新闻公告结束-->

    <!--头部背景-->
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%">
    </div>
    <!--头部背景结束-->

    <!--商家简介-->
    <div class="detail" v-show="detailShow">
      <!--使用css sticky footer布局-->
      <div class="detail-wrapper clearfix">
        <div class="detail-main">
          <h1 class="name">{{seller.name}}</h1>

          <!--使用自定义星星组件-->
          <div class="star-wrapper">
            <star :size="48" :score="seller.score"></star>
          </div>
          <!--使用自定义星星组件结束-->

          <!--优惠信息-->
          <div class="title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
          <!--优惠信息结束-->

          <!--优惠信息内容-->
          <ul v-if="seller.supports" class="supports">
            <li class="support-item" v-for="(item,index) in seller.supports">
              <span class="icon" :class="classMap[index]"></span>
              <span class="text">{{item.description}}</span>
            </li>
          </ul>
          <!--优惠信息内容结束-->

          <!--商家公告-->
          <div class="title">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>
          <!--商家公告结束-->

          <!--商家公告内容-->
          <div class="bulletin">
            <p class="content">{{seller.bulletin}}</p>
          </div>
          <!--商家公告内容结束-->

        </div>
      </div>
      <div class="detail-close" @click="closeDetail">
        <i class="icon-close"></i>
      </div>
      <!--使用css sticky footer布局结束-->
    </div>
    <!--商家简介结束-->

  </div>
</template>

<script type="text/ecmascript-6">

  // 导入评分星星组件
  import star from '../star/star.vue';

  export default {

    components: {
      star
    },

    // 接收父组件传递的数据
    props: {
      seller: {
        type: Object
      }
    },

    mounted() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    },

    data() {
      return {
        detailShow: false
      };
    },

    methods: {
      showDetail() {
        this.detailShow = true;
      },
      closeDetail() {
        this.detailShow = false;
      }
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
    overflow: hidden
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
    .detail
      position: fixed
      top: 0
      left: 0
      z-index: 100
      width: 100%
      height: 100%
      overflow: auto
      background-color: rgba(7, 17, 27, 0.8)
      -webkit-backdrop-filter :blur(2px)
      .detail-wrapper
        width: 100%
        min-height: 100%
        .detail-main
          margin-top: 64px
          padding-bottom: 64px
          /*text-align: center*/
          .name
            font-size: 16px
            line-height: 16px
            font-weight: 700
            text-align: center
          .star-wrapper
            margin-top: 16px
            /*margin-bottom: 28px*/
            text-align: center
          .title
            display: flex
            width: 80%
            margin-top: 28px
            margin-left: auto
            margin-right: auto
            margin-bottom: 24px
            .line
              flex: 1
              position: relative
              top: -6px
              border-bottom: 1px solid rgba(255,255,255,0.2)
            .text
              padding:0 12px
              font-weight: 700
              font-size: 14px
          .supports
            width: 80%
            margin: 0 auto
            padding:0 12px
            box-sizing :border-box
            font-size: 0
            .support-item
              height: 16px
              margin-bottom: 12px
              .icon
                display: inline-block
                width: 16px
                height: 16px
                background-size :16px 16px
                background-repeat :no-repeat
                vertical-align: top
                margin-right: 6px
                &.decrease
                  bg-image('decrease_2')
                &.discount
                  bg-image('discount_2')
                &.guarantee
                  bg-image('guarantee_2')
                &.invoice
                  bg-image('invoice_2')
                &.special
                  bg-image('special_2')
              .text
                /*vertical-align: */
                font-size: 12px
                font-weight: 200
                line-height: 16px

          .bulletin
            width: 80%
            margin: 0 auto
            box-sizing: border-box
            padding:0 12px
            .content
              font-size: 12px
              font-weight: 200
              line-height: 24px

      .detail-close
        position: relative
        width: 32px
        height: 32px
        margin: -64px auto 0 auto
        clear: both
        font-size: 32px

</style>
