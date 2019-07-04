import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {// 后续按需加载
    user
  }
});

export default store;
