import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import App from './App';
import router from '../router';
import store from '../store';
import './registerServiceWorker';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  router,
  store: new Vuex.Store(store),
  components: {},
  render: h => h(App),
}).$mount('#app');
