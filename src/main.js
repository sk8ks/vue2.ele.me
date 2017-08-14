// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import infiniteScroll from 'vue-infinite-scroll'
import VeeValidate from 'vee-validate'
import App from './App'
import router from './router'
import store from './store'
import './util/normalize'

Vue.use(VeeValidate)
// Vue.use(infiniteScroll)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	router,
	store,
	// render: h => h(App)
})
.$mount('router-view')
