import {
    fetchGeolocation,
    fetchEntries,
    fetchHotSearchWords,
    fetchRestaurants,
    fetchAddressNearby,
    fetchCategory,
    fetchVerifyCode,
    login,
    fetchCurrentUser,
    fetchUserInfo,
    fetchUserOrders,
} from '@/service'
import {
    sleep,
    setCookies,
    getCookies,
    removeCookies,
} from 'components/common/utils'

export default {
    // 通过经纬度获取地理信息
    async geolocationAction({commit, getters, state}) {
        const coords = getters.coordinates;
		const geo = await fetchGeolocation(coords);
		commit('RECORD_GEO', geo);
	},
    // 获取分类入口
    async entriesAction({commit, getters, state}) {
        const coords = getters.coordinates;
        const geohash = getters.geohash;
        const res = await fetchEntries(coords);
        const entries = res.entries.map((e,i,ary) => {
            const newlink = decodeURIComponent(e.link);
            return Object.assign({}, e, {link: '#geohash='+geohash+'#'+newlink.slice(newlink.indexOf('target'))});
        });
        let entryList = Array.from({length: Math.ceil(entries.length/8)}, () => []);
        entryList.length && entries.map((v,i,s) => entryList[parseInt(i/8)].push(v));
        commit('RECORD_ENTRIES', entries);
        commit('RECORD_ENTRYLIST', entryList);
        return entryList;
    },
    // 更新热搜词
    async hotSearchWordsAction({commit, getters, state}) {
        const coords = getters.coordinates;
        const hsw = await fetchHotSearchWords(coords);
        commit('RECORD_HOT_SEARCH_WORDS', hsw);
        return hsw
    },
    // 餐馆列表数据
    restaurantsAction({commit, getters, state}, query = {}) {
        const coords = getters.coordinates;
        return fetchRestaurants(Object.assign({}, coords, {offset: 0, limit: 20}, query));
        // let restaurantList = await fetchRestaurants(Object.assign({}, coords, {offset: 0, limit: 20}, query));
        // restaurantList = restaurantList.map((r,i,rest) => Object.assign({activity_more_status: !1}, r));
        // await sleep(1000).then(() => commit('RECORD_RESTAURANT_LIST', restaurantList));
        // return restaurantList;
    },
    // 根据筛选参数返回餐馆列表
    // async filterRestaurantsAction({commit, getters, state}, query = {}) {
    //     const coords = getters.coordinates;
    //     let restaurantList = await fetchRestaurants(Object.assign({}, coords, {offset: 0, limit: 20}, query));
    //     restaurantList = restaurantList.map((r,i,rest) => Object.assign({activity_more_status: !1}, r));
    //     await sleep(1000).then(() => commit('RECORD_RESTAURANT_LIST', restaurantList));
    //     return restaurantList;
    // },
    // 附近地区
    searchAddressNearbyAction({commit, getters, state}, query) {
        const coords = getters.coordinates;
        return fetchAddressNearby( Object.assign({}, coords, {offset: 0, limit: 20}, query) );
    },
    // 分类数据
    categoryAction({commit, getters, state}, query) {
        const coords = getters.coordinates;
        return fetchCategory( Object.assign({}, coords, query) );
    },
    // 发送验证短信
    sendVcodeAction({commit, getters, state}, query) {
        return fetchVerifyCode(query);
    },
    // 登录
    loginAction({commit, getters, state}, query) {
        return login(Object.assign({}, query));
    },
    // 认证用户信息，获取当前用户id
    async currentUserAction({commit, getters, state}) {
        const user = await fetchCurrentUser();
        if (user.userid) {
            commit('AUTHENTICATED', !!1);
        } else {
            commit('AUTHENTICATED', !1);
        }
        return user;
    },
    // 用户信息
    async userInfoAction({commit, getters, state}) {
        const userId = getCookies('userid');
        const userInfo = await fetchUserInfo(userId);
        commit('RECORD_USER_INFO', userInfo);
        return userInfo;
    },
    // 订单
    async userOrdersAction({commit, getters, state}, query) {
        const userId = getCookies('userid');
        const orders = await fetchUserOrders(userId, Object.assign({}, query));
        commit('RECORD_ORDERS', orders);
        return orders;
    }
}
