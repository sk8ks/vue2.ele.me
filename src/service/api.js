import {apiUrl} from '@/util/env'
export default {
    reverseGeoCoding:       apiUrl + '/api/reverse_geo_coding',    // 获取当前地理信息
    entries:                apiUrl + '/api/entries',    // 快捷入口
    hotSearchWords:         apiUrl + '/api/hot_search_words',    // 热门词
    restaurants:            apiUrl + '/api/restaurants',    // 餐饮店
    searchAddressNearby:    apiUrl + '/api/search_address_nearby',    // 附近地区
    category:               apiUrl + '/api/category',    // 分类数据
}
