import {
    fetchGeolocation,
    fetchEntries,
    fetchHotSearchWords,
    fetchRestaurants,
    fetchAddressNearby,
    fetchCategory,
} from '@/service'
import {sleep} from 'components/common/utils'

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
            return Object.assign({}, e, {link: '#geohash='+geohash+'#'+newlink.slice(newlink.indexOf('target'))});
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
    // 餐馆列表数据
    async restaurantsAction({commit, getters, state}, query = {}) {
        const coords = getters.coordinates;
        let restaurantList = await fetchRestaurants(Object.assign({}, coords, {offset: 0, limit: 20}, query));
        restaurantList = restaurantList.map((r,i,rest) => Object.assign({activity_more_status: !1}, r));
        await sleep(1000).then(() => commit('RECORD_RESTAURANT_LIST', restaurantList));

    },
    // 根据筛选参数返回餐馆列表
    async filterRestaurantsAction({commit, getters, state}, query = {}) {
        const coords = getters.coordinates;
        let restaurantList = await fetchRestaurants(Object.assign({}, coords, {offset: 0, limit: 20}, query));
        restaurantList = restaurantList.map((r,i,rest) => Object.assign({activity_more_status: !1}, r));
        await sleep(1000).then(() => commit('RECORD_RESTAURANT_LIST', restaurantList.reverse()));
    },
    // 附近地区
    searchAddressNearbyAction({commit, getters, state}, query) {
        const coords = getters.coordinates;
        return fetchAddressNearby( Object.assign({}, coords, {offset: 0, limit: 20}, query) );
    },
    // 分类数据
    categoryAction({commit, getters, state}, query) {
        const coords = getters.coordinates;
        return fetchCategory( Object.assign({}, coords, query) );
    }
}
