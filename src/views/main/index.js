import Vue from 'vue';
import App from './App.vue';
import router from '../../js/router'; // 引入路由文件
// import VueI18n from '../../js/i18n'; // 引入封装的国际化文件
import '../../style/common.styl'; // 引入共用样式

import store from '../../js/store';

Vue.config.productionTip = false;

// Vue.prototype.$snackbars = snackbars;

// 在跳转路由之前，判断是否存在token， 如果不存在跳转到登录页面
router.beforeEach((to, from, next) => {
  // if (!getToken()) {
    // toLogin();
  // } else {
    next();
  // }
});

// Vue.use(VueI18n); // 将vueI18n注入到vue的实例中
// Vue.use(iView); // 将iView注入到vue的实例中

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
