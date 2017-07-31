import Vue from 'vue'
import VueRouter from 'vue-router'
import {routerMode} from '@/util/env'
import routes from './routers'

Vue.use(VueRouter)

export default new VueRouter({
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
