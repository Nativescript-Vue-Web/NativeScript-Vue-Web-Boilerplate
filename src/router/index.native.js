import Vue from 'nativescript-vue';
import Router from 'vue-router';

import Home from '../views/Home.vue';
import About from '../views/About.vue';

Vue.use(Router);

const router = new Router({
    pageRouting: true,
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home,
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        },
        {
            path: '*',
            redirect: '/home',
        },
    ],
});

router.replace('/home');

export default router;

// import Home from '../components/Home.native.vue';
// import HelloWorld from '../components/HelloWorld';
// import Counter from '../components/Counter.native.vue';

// Vue.use(Router);

// const router = new Router({
//   pageRouting: true,
//   routes: [
//     {
//       path: '/home',
//       component: Home,
//       meta: {
//         title: 'Home',
//       },
//     },
//     {
//       path: '/hello',
//       component: HelloWorld,
//       meta: {
//         title: 'Hello World',
//       },
//     },
//     {
//       path: '/counter',
//       component: Counter,
//       meta: {
//         title: 'Counter',
//       },
//     },
//     {
//       path: '*',
//       redirect: '/home',
//     },
//   ],
// });

// router.replace('/home');

// export default router;
