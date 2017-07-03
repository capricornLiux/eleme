<template>
  <div class="shopCart">
    <div class="content">

      <!--左侧-->
      <div class="content-left">

        <!--logo包裹div-->
        <div class="logo-wrapper">
          <div class="logo">
            <!--购物车字体图标-->
            <span class="icon-shopping_cart"></span>
          </div>
        </div>
        <!--logo包裹div结束-->

        <!--价格-->
        <div class="price">

        </div>
        <!--价格结束-->

        <!--描述-->
        <!--提示起送费等等-->
        <div class="desc"></div>
        <!--描述结束-->
      </div>
      <!--左侧结束-->


      <!--右侧按钮, 宽度固定-->
      <div class="content-right"></div>
      <!--右侧按钮, 宽度固定结束-->

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .shopCart
    position: fixed
    left: 0
    bottom: 0
    z-index :99
    width: 100%
    height: 48px
    background-color : blue
</style>
