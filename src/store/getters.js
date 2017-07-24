
export default {
	// 获取坐标
	coordinates: state => ({
		latitude: state.latitude,
		longitude: state.longitude
	}),
	geohash: state => state.geohash,
	address: state => state.address,
	addressName: state => state.addressName,
	hotSearchWords: state => state.hotSearchWords,
	entries: state => state.entries,
	entryList: state => state.entryList,
	restaurantList: state => state.restaurantList,
}
