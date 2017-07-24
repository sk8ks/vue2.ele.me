import {
    fetchGeolocation,
    fetchEntries,
    fetchHotSearchWords,
    fetchRestaurants,
    fetchAddressNearby
} from '@/service'

export default {
    // 通过经纬度获取地理信息
    async geolocationAction({commit, getters, state}) {
        const coords = getters.coordinates;
		const res = await fetchGeolocation(coords);
		commit('RECORD_GEO', res);
	},
    // 获取分类入口
    async entriesAction({commit, getters, state}) {
        const coords = getters.coordinates;
        const geohash = getters.geohash;
        const res = await fetchEntries(coords);
        const entries = res[0].entries.map((e,i,ary) => {
            const newlink = decodeURIComponent(e.link);
            return Object.assign({}, e, {link: '#geohash='+geohash+'#'+newlink.slice(newlink.indexOf('?target'))});
        });
        let entryList = Array.from({length: Math.ceil(entries.length/8)}, () => []);
        entryList.length && entries.map((v,i,s) => entryList[parseInt(i/8)].push(v));
        commit('RECORD_ENTRIES', entries);
        commit('RECORD_ENTRYLIST', entryList);
    },
    // 更新热搜词
    async hotSearchWordsAction({commit, getters, state}) {
        const coords = getters.coordinates;
        commit('RECORD_HOT_SEARCH_WORDS', await fetchHotSearchWords(coords));
    },

    async restaurantsAction({commit, getters, state}) {
        const coords = getters.coordinates;
        let restaurantList = await fetchRestaurants(Object.assign({}, coords, {offset: 0, limit: 20}));
        restaurantList = restaurantList.map((r,i,rest) => Object.assign({activity_more_status: !1}, r))
        commit('RECORD_RESTAURANT_LIST', restaurantList);
    },
    // 附近地区
    searchAddressNearbyAction({commit, getters, state}, query) {
        const coords = getters.coordinates;
        return fetchAddressNearby( Object.assign({}, coords, {offset: 0, limit: 20}, query) );
    }
}
