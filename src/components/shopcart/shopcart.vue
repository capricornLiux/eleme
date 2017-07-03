<template>
  <div class="shopCart">
    <div class="content">

      <!--左侧-->
      <div class="content-left">

        <!--logo包裹div-->
        <div class="logo-wrapper">
          <div class="logo">
            <!--购物车字体图标-->
            <i class="icon-shopping_cart"></i>
          </div>
        </div>
        <!--logo包裹div结束-->

        <!--价格-->
        <div class="price">&yen;{{20}}</div>
        <!--价格结束-->

        <!--描述-->
        <!--提示起送费等等-->
        <div class="desc">另需配送费&yen;{{deliveryPrice}}</div>
        <!--描述结束-->
      </div>
      <!--左侧结束-->


      <!--右侧按钮, 宽度固定-->
      <div class="content-right">
        <div class="pay">&yen;{{minPrice}}起送</div>
      </div>
      <!--右侧按钮, 宽度固定结束-->

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    // 接收父组件传递的数据
    props: {
      deliveryPrice: {
        type: Number
      },
      minPrice: {
        type: Number
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .shopCart
    position: fixed
    left: 0
    bottom: 0
    z-index: 99
    width: 100%
    height: 48px
    .content
      display: flex
      background-color: #141d27
      font-size: 0
      .content-left
        /*使用自适应布局*/
        flex: 1
        .logo-wrapper
          display: inline-block
          position: relative
          top: -10px
          margin: 0 12px
          padding: 6px
          width: 56px
          height: 56px
          box-sizing :border-box
          vertical-align: top
          border-radius : 50%
          background-color: #141d27
          .logo
            width: 100%
            height: 100%
            border-radius :50%
            text-align: center
            background-color: #2b343c
            .icon-shopping_cart
              line-height: 44px
              font-size: 24px
              color: #80858a
        .price
          display: inline-block
          font-size: 16px
          color:rgba(255,255,255,0.4)
          line-height:24px
          margin-top: 12px
          padding-right: 12px
          border-right: 1px solid rgba(255,255,255,0.1)
        .desc
          display: inline-block
          margin: 12px 0 0 12px
          font-size: 16px
          font-weight: 700
          line-height: 24px
          color: rgba(255,255,255,0.4)
      .content-right
        flex: 0 0 105px
        width: 105px
        height: 48px
        .pay
          background-color:rgb(43,51,59)
          height: 48px
          font-size: 12px
          color:rgba(255,255,255,0.4)
          font-weight: 700
          line-height: 48px
          text-align: center
          vertical-align: middle

</style>
