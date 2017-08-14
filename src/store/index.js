import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
	token: '',				// 安全令牌
	authenticated: !1,		// 是否已通过认证
	userInfo: null,		// 用户信息
	latitude: 31.23037, 			// 当前位置纬度
	longitude: 121.473701, 			// 当前位置经度
	geohash: '',			//地址geohash值
	address: '',			// 地址
	addressName: '',		//
	hotSearchWords: [],		// 热搜词
	entries: [],			// 快捷分类
	entryList: [],			// 格式化分类列表
	restaurantList: [],		// 餐馆列表
	orders: [],				// 订单
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
})
