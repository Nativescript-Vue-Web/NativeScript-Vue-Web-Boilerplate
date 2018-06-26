import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import App from './App';
import router from '../router';
import store from '../store';
import './registerServiceWorker';

import Button from '../components/shared/Button';
import Label from '../components/shared/Label';
import Img from '../components/shared/Img';
import StackLayout from '../components/shared/StackLayout';
import Page from '../components/shared/Page';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.config.productionTip = false;

Vue.component('Button', Button);
Vue.component('Label', Label);
Vue.component('Img', Img);
Vue.component('StackLayout', StackLayout);
Vue.component('Page', Page);

new Vue({
  router,
  store: new Vuex.Store(store),
  components: {},
  render: h => h(App),
}).$mount('#app');
