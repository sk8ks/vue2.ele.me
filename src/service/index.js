
import 'whatwg-fetch'
import api from './api'
/**
 *
 */
const f = async (url = '', data = {}, type = 'GET') => {
    type = type.toUpperCase();
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

    if (type == 'POST') {
        Object.defineProperty(requestConfig, 'body', {
            value: JSON.stringify(data)
        })
    }

    try {
        const res = await fetch(url, requestConfig);
        const resJson = await res.json();
        return resJson;
    } catch (error) {
        throw new Error(error)
    }
}


// export const getUserInfo = () => fetch(url.userInfoAction, postJSONConfig({uid: getStore('uid')}));
//
export const fetchGeolocation       = query => f(api.reverseGeoCoding, query);
export const fetchEntries           = query => f(api.entries, query);
export const fetchHotSearchWords    = query => f(api.hotSearchWords, query);
export const fetchRestaurants       = query => f(api.restaurants, query);
export const fetchAddressNearby     = query => f(api.searchAddressNearby, query);
export const fetchCategory          = query => f(api.category, query);
