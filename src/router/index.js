import Vue from 'vue';
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
