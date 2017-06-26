<template>
  <div class="star" :class="starType">
    <span v-for="itemClass in itemClasses" :class="itemClass" class="star-item"></span>
  </div>
</template>

<script>

  // 常量
  const LENGTH = 5;
  const CLASS_ON = 'on';
  const CLASS_HALF = 'half';
  const CLASS_OFF = 'off';

  export default {
    props: {
      // 图片大小
      size: {
        type: Number
      },

      // 评分
      score: {
        type: Number
      }
    },

    // 计算型属性
    computed: {
      starType() {
        return 'star-' + this.size;
      },

      // 评论星星状态数组
      itemClasses() {
        let result = [];
        // 计算分数, 小数位大于0.5, 取0.5
        let score = Math.floor(this.score * 2) / 2;

        // 判断有没有小数
        let hasDecimal = score % 1 !== 0; // 1.5 % 1 = 0.5

        let integer = Math.floor(score); // 取分数的整数位

        for (let i = 0; i < integer; i++) {
          // 全星星
          result.push(CLASS_ON);
        }

        if (hasDecimal) {
          // 半星
          result.push(CLASS_HALF);
        }

        while (result.length < LENGTH) {
          // 说明还有不足的星星
          result.push(CLASS_OFF);
//          result.length++;
        }
        return result;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

  @import "../../common/stylus/mixin.styl"

  .star
    font-size: 0
    .star-item
      display: inline-block
      background-repeat: no-repeat
    &.star-24
      .star-item
        width:10px
        height:10px
        margin-right: 3px
        background-size :10px 10px
        &.on
          bg-image('star24_on');
        &.half
          bg-image('star24_half');
        &.off
          bg-image('star24_off');
        &:last-child
          margin-right: 0
    &.star-36
      .star-item
        width:15px
        height:15px
        margin-right: 6px
        background-size :15px 15px
        &.on
          bg-image('star36_on');
        &.half
          bg-image('star36_half');
        &.off
          bg-image('star36_off');
        &:last-child
          margin-right: 0
    &.star-48
      .star-item
        width:20px
        height:20px
        margin-right: 21px
        background-size :20px 20px
        &.on
          bg-image('star48_on');
        &.half
          bg-image('star48_half');
        &.off
          bg-image('star48_off');
        &:last-child
          margin-right: 0
</style>
