<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuwrapper">
      <ul class="menu-list">
        <li class="menu-item" v-for="(item,index) in goods" :class="{'current':currentIndex === index}" @click="selectMenu(index, $event)">
          <span class="text">
            <span class="icon" v-show="item.type>0" :class="classMap[item.type]"></span>{{item.name}}
          </span>
        </li>
      </ul>
    </div>

    <div class="foods-wrapper" ref="foodswrapper">
      <ul>
        <li v-for="type in goods" class="foods-list food-list-hook">
          <!--一类食品标题-->
          <h1 class="type-title">{{type.name}}</h1>
          <!--一类食品标题结束-->

          <!--一类食品列表-->
          <ul>
            <li v-for="food in type.foods" class="food-item">

              <!--左侧图片-->
              <div class="icon">
                <img :src="food.icon" width="56" height="56">
                <!--<img :src="food.image">-->
              </div>
              <!--左侧图片结束-->

              <!--右侧内容-->
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>

                <!--商品额外信息 月销,好评-->
                <div class="extra">
                  <span class="count">月销{{food.sellCount}}份</span><span class="rating">好评率{{food.rating}}%</span>
                </div>
                <!--商品额外信息 月销,好评 结束-->

                <!--商品价格-->
                <div class="price">
                  <span class="now-price">&yen;{{food.price}}</span>
                  <span v-if="food.oldPrice" class="old-price">&yen;{{food.oldPrice}}</span>
                </div>
                <!--商品价格结束-->

              </div>
              <!--右侧内容结束-->
            </li>
          </ul>
          <!--一类食品列表结束-->
        </li>
      </ul>
    </div>

    <!--使用自定的购物车组件-->
    <shopcart :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice"></shopcart>
  </div>
</template>

<script>

  import BScroll from 'better-scroll';

  // 导入购物车组件
  import shopcart from '../shopcart/shopcart.vue';

  export default {
    components: {
      shopcart
    },
    props: {
      seller: {},
      type: Object
    },

    data() {
      return {
        goods: [],
        // 商品列表高度数组
        listHeight: [],
        scrollY: 0
      };
    },

    mounted() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
      this.$http.get('/api/goods').then((res) => {
        if (res.data.errno === 0) {
          this.goods = res.data.data;
//          console.log(this.goods);

          // 初始化的时候, vue更新dom的时候是异步的, 只有在nextTick方法中才会执行
          this.$nextTick(() => {
            // 让左右列表能够滚动
            this._initScroll();
            // 计算右侧高度集合
            this._calculateHeight();
          });
        }
      });
    },

    methods: {
      // 调用滚动方法
      _initScroll() {
        this.menuScroll = new BScroll(this.$refs.menuwrapper, {
          // 是否派发点击事件
          click: true
        });
        this.foodsScroll = new BScroll(this.$refs.foodswrapper, {
          probeType: 3
        });
        // 获取滚动距离
        this.foodsScroll.on('scroll', (pos) => {
//          console.log('滚动了');
          this.scrollY = Math.abs(Math.round(pos.y));
          console.log(this.scrollY);
        });
      },

      // 计算右侧商品列表的高度
      _calculateHeight() {
        // 获取列表dom
        let foodList = this.$refs.foodswrapper.getElementsByClassName('food-list-hook');

        let height = 0;

        this.listHeight.push(height);

        for (let i = 0; i < foodList.length; i++) {
          let item = foodList[i];
          height += item.clientHeight;
          this.listHeight.push(height);
        }
      },
      // 点击左侧的菜单按钮
      selectMenu(index, event) {
        let foodList = this.$refs.foodswrapper.getElementsByClassName('food-list-hook');
        let el = foodList[index];
        this.foodsScroll.scrollToElement(el, 1000);
      }
    },
    // 定义计算型属性
    computed: {
      currentIndex() {
        // 遍历当前高度列表
        console.log('计算左侧索引的方法调用了');
        for (let i = 0; i < this.listHeight.length; i++) {
          let height1 = this.listHeight[i];
          let height2 = this.listHeight[i + 1];
          if (this.scrollY >= height1 && this.scrollY < height2) {
            console.log(1);
            return i;
          }
        }
      }
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
            color: rgb(8, 18, 26)
            font-weight: 200
            line-height: 14px
            .icon
              display: inline-block
              vertical-align: top
              width: 12px
              height: 12px
              margin-right: 2px
              background-size: 12px 12px
              background-repeat: no-repeat
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

          &.current
            background-color :#fff
            .text
              .icon
                font-weight: 700
    .foods-wrapper
      flex: 1
      .foods-list
        .type-title
          font-size: 12px
          color: rgb(147, 153, 159)
          line-height: 26px
          padding-left: 14px
          background-color: #f3f5f7
          border-left: 1px solid #d9dde1
        .food-item
          display: flex
          /*padding: 18px*/
          margin: 18px
          padding-bottom: 18px
          border-1px(rgba(7, 17, 27, 0.1))
          &:last-child
            border-none()
            margin-bottom: 0
          .icon
            flex: 0 0 56px
            margin-right: 10px
          .content
            flex: 1
            /*vertical-align: top*/
            .name
              margin: 2px 0 8px 0
              height: 14px
              line-height: 14px
              font-size: 14px
              color: rgb(7, 17, 27)
            .desc, .extra
              line-height: 10px
              font-size: 10px
              color: rgb(147, 153, 159)
            .desc
              line-height: 12px
              margin-bottom: 8px
            .extra
              .count
                margin-right: 12px
            .price
              span
                font-weight: 700
                line-height: 24px
              .now-price
                margin-right: 8px
                font-size: 14px
                color: rgb(240, 20, 20)
              .old-price
                text-decoration: line-through
                font-size: 10px
                color: rgb(147, 153, 159)


</style>
