<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul class="menu-list">
        <li class="menu-item" v-for="item in goods">
          <span class="text">
            <span class="icon" v-show="item.type>0" :class="classMap[item.type]"></span>{{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper"></div>
  </div>
</template>

<script>
  export default {
    props: {
      seller: {},
      type: Object
    },

    data() {
      return {
        goods: []
      };
    },

    mounted() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
      this.$http.get('/api/goods').then((res) => {
        if (res.data.errno === 0) {
          this.goods = res.data.data;
          console.log(this.goods);
        }
      });
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

  /*@import "../../common/stylus/index.styl"*/
  @import "../../common/stylus/mixin.styl"

  .goods
    display: flex
    position: absolute
    top: 174px
    bottom: 46px
    width: 100%
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background-color: #f3f5f7
      .menu-list
        .menu-item
          display: table
          height: 54px
          width: 56px
          padding: 0 12px
          /*line-height: 54px*/
          line-height: 14px
          .text
            display: table-cell
            /*display: table*/
            vertical-align: middle
            font-size: 12px
            color: rgb(8,18,26)
            font-weight: 200
            line-height: 14px
            .icon
              display: inline-block
              vertical-align: top
              width: 12px
              height: 12px
              margin-right: 2px
              background-size :12px 12px
              background-repeat :no-repeat
              &.decrease
                bg-image('decrease_3')
              &.discount
                bg-image('discount_3')
              &.guarantee
                bg-image('guarantee_3')
              &.invoice
                bg-image('invoice_3')
              &.special
                bg-image('special_3')

    .foods-wrapper
      flex: 1

</style>
