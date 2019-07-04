import Vue from 'vue';
import Router from 'vue-router';
/*view 全部父路由*/
Vue.use(Router);

const constantRouterMap = [
  {
    // 默认是首页 进行重定向 默认是显示首页
    path: '/',
    redirect: '/a'
  },
  {
    path: '/a', //数据中心列表
    name: 'a',
    component: () => import(/* webpackChunkName: "XX" */ '../views/a.vue')
  },
  {
    path: '/b', //资源管理
    component: () => import(/* webpackChunkName: "b" */ '../views/b/index.vue'),
    redirect: 'b/b1',
    children: [
      {
        path: 'b1',
        component: () => import(/* webpackChunkName: "b1" */ '../views/b/b1.vue')
      },
      {
        path: 'b2',
        component: () => import(/* webpackChunkName: "resources-modelLibrary" */ '../views/b/b2.vue')
      }
    ]
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "blank" */ '../views/blank.vue')
  }
];
export default new Router({
  // mode: 'history', // 此处也是出现页面空白之一，需要将history改为hash模式，如果非要使用history模式，需要后端配合使用
  base: __dirname,
  // // routes是指路由跳转的页面
  routes: constantRouterMap
});
