import {apiUrl} from '@/util/env'

const getApiUrl = url => apiUrl + url;

export default {
    login:                  getApiUrl('/api/login'),    // 登录
    logout:                 getApiUrl('/api/logout'),    // 退出登录
    currentUser:            getApiUrl('/api/current_user'),     //  当前用户
    userInfo:               getApiUrl('/api/user/'),         // 用户信息
    reverseGeoCoding:       getApiUrl('/api/reverse_geo_coding'),   // 获取当前地理信息
    entries:                getApiUrl('/api/entries'),    // 快捷入口
    hotSearchWords:         getApiUrl('/api/hot_search_words'),    // 热门词
    restaurants:            getApiUrl('/api/restaurants'),    // 餐饮店
    searchAddressNearby:    getApiUrl('/api/search_address_nearby'),    // 附近地区
    category:               getApiUrl('/api/category'),    // 分类数据
    verifyCode:             getApiUrl('/api/mobile/verify_code'),    // 发送验证短信
    userOrders:             getApiUrl('/api/user/'),    // 订单

}
