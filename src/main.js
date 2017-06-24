// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
// import的名称为该第三方模块的package.json中的name属性
import VueRouter from 'vue-router';

// 导入底部的三个组件
import goods from './components/goods/goods.vue';
import ratings from './components/ratings/ratings.vue';
import seller from './components/seller/seller.vue';

// 注册vue-router
Vue.use(VueRouter);

// 创建路由配置对象
let router = new VueRouter({
  mode: 'history',

  // 配置路由map
  routes: [
    {
      path: '/goods',
      component: goods
    },
    {
      path: '/ratings',
      component: ratings
    },
    {
      path: '/seller',
      component: seller
    }
  ]
});

Vue.config.productionTip = false;

// 跳过校验规则
/* eslint-disable no-new */
new Vue({

  // 将路由挂在到实例上
  router,
  el: '#app',
  template: '<App/>',
  components: {
    App,
    goods,
    ratings,
    seller
  }
});
