import Vue from 'vue'
import VueRouter from 'vue-router'
import {routerMode} from '@/util/env'
import routes from './routers'
import store from '../store'

Vue.use(VueRouter)

const router = new VueRouter({
	routes,
	mode: routerMode,
	// strict: process.env.NODE_ENV !== 'production',
	scrollBehavior (to, from, savedPosition) {
		// routerController(to, from);
	    if (savedPosition) {
		    return savedPosition
		} else {
			if (from.meta.keepAlive) {
				from.meta.savedPosition = document.body.scrollTop;
			}
		    return { x: 0, y: to.meta.savedPosition || 0}
		}
	}
});

router.beforeEach((to, from, next) => {
    if (to.meta.loginRedirect) {  	// 登录跳转
        next({
            query: {redirect: '/profile'}  // 登录成功后跳转到该路由
        })
    } else {
        next();
    }
})

export default router;
