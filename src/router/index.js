import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/index.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        // 配置路由规则
        {
            path: "/",
            component: Home
        },
        {
            path: '/fuli',
            name: 'fuli',
            component: () => import(/* webpackChunkName: "about" */ '../pages/fuli.vue')
        },
		{
            path: '/cart',
            name: 'cart',
            component: () => import(/* webpackChunkName: "about" */ '../pages/cart.vue')
        },
		{
            path: '/dingdan',
            name: 'dingdan',
            component: () => import(/* webpackChunkName: "about" */ '../pages/dingdan.vue')
        },
		{
            path: '/user',
            name: 'user',
            component: () => import(/* webpackChunkName: "about" */ '../pages/user.vue'),
			// children:[
			// {path:'login',name:'login',component:()=>import('../pages/login.vue')},
			// {path:'register',name:'register',component:()=>import('../pages/register.vue')}
			// ]
        }

    ],
    linkExactActiveClass : "foot-dj-active" //默认激活的类
});

export default router;
