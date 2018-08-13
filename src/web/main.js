import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import { Button, Label, Img, StackLayout, Page } from '../../../Nativescript-Vue-Web/src/main';

import App from './App';
import router from '../router';
import store from '../store';
import './registerServiceWorker';

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
