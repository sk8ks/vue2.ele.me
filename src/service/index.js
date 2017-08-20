
import 'whatwg-fetch'
import api from './api'
import {getToken} from './auth'
/**
 * [f description]
 * @param  {String}  [url='']     [description]
 * @param  {Object}  [data={}]    [description]
 * @param  {String}  [type='GET'] [description]
 * @return {Promise}              [description]
 */
const f = async (url = '', data = {}, type = 'GET') => {
    type = type.toUpperCase();
    const auth = getToken();
    if (type === 'GET') {
		let dataStr = '';
		Object.keys(data).forEach(key => {
			dataStr += key + '=' + data[key] + '&';
		})

		if (dataStr !== '') {
			url = url + '?' + dataStr.substr(0, dataStr.lastIndexOf('&'));
		}
	}

    const requestConfig = {
		credentials: 'include',
		method: type,
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		mode: "cors",
        cache: "force-cache",
	}
    if (auth) {
        requestConfig.headers.Authorization = `Bearer `+ auth;
    }

    if (type == 'POST') {
        Object.defineProperty(requestConfig, 'body', {
            value: JSON.stringify(data)
        })
    }

    try {
        const res = await fetch(url, requestConfig);
        return res.json();
    } catch (error) {
        throw new Error(error)
    }
}

export const login                  = query => f(api.login, query, 'POST'); 
export const fetchCurrentUser       = query => f(api.currentUser, query);
export const fetchUserInfo          = uid => f(api.userInfo + uid);
export const fetchGeolocation       = query => f(api.reverseGeoCoding, query);
export const fetchEntries           = query => f(api.entries, query);
export const fetchHotSearchWords    = query => f(api.hotSearchWords, query);
export const fetchRestaurants       = query => f(api.restaurants, query);
export const fetchAddressNearby     = query => f(api.searchAddressNearby, query);
export const fetchCategory          = query => f(api.category, query);
export const fetchVerifyCode        = query => f(api.verifyCode, query, 'POST');
export const fetchUserOrders        = (uid, query) => f(api.userInfo + uid + '/orders', query);
