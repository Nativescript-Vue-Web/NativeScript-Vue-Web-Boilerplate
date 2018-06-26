import Vue from 'nativescript-vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import router from '../router';
import store from '../store';

import './styles.scss';

Vue.use(Vuex);
Vue.use(VueRouter);

// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

const storeInstance = new Vuex.Store(store);

Vue.prototype.$store = storeInstance;

new Vue({
  router,
  store: storeInstance,
}).$start();
