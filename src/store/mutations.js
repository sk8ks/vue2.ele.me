import {
	RECORD_COORDS,
	RECORD_GEO,
	RECORD_ENTRIES,
	RECORD_ENTRYLIST,
	RECORD_RESTAURANT_LIST,
	RECORD_HOT_SEARCH_WORDS,
} from './mutation-types.js'

import {setStore, getStore} from 'components/common/utils'

// import {localapi, proapi} from 'src/config/env'

export default {
	// 记录当前经度纬度
	[RECORD_COORDS](state, {
		latitude,
		longitude
	}) {
		state.latitude = latitude;
		state.longitude = longitude;

	},
	// 记录当前地标信息
	[RECORD_GEO](state, {
		geohash,
		address,
		name,
		latitude,
		longitude,
	}) {
		state.geohash = geohash;
		state.address = address;
		state.addressName = name;
		setStore('STORE', {
			location:{
				geohash:state.geohash,
				latitude:state.latitude,
				longitude:state.longitude
			}
		})
	},
	// 更新热搜词
	[RECORD_HOT_SEARCH_WORDS](state, hotSearchWords) {
		state.hotSearchWords = [...hotSearchWords];
	},
	// 入口分类
	[RECORD_ENTRIES](state, entries) {
		state.entries = [...entries];
	},
	[RECORD_ENTRYLIST](state, entryList) {
		state.entryList = [...entryList];
	},
	// 更新餐馆列表
	[RECORD_RESTAURANT_LIST](state, restaurantList) {
		state.restaurantList = [...restaurantList];
	}

}
