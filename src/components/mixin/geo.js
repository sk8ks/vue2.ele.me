
/**
 * [fail description]
 * @param  {[type]}   error [description]
 * @param  {Function} cb    [description]
 * @return {[type]}         [description]
 */
const fail = (error, cb) => {
    switch(error.code) {
	    case error.PERMISSION_DENIED:
			console.log('用户不允许地理定位');
            cb('PERMISSION_DENIED');
			break;
	    case error.POSITION_UNAVAILABLE:
			console.log('无法获取当前位置');
            cb('POSITION_UNAVAILABLE');
			break;
	    case error.TIMEOUT:
			console.log('操作超时');
            cb('TIMEOUT');
			break;
	    case error.UNKNOWN_ERROR:
			console.log('未知错误');
            cb('UNKNOWN_ERROR');
			break;
    }
}

/**
 *  获取地理信息
 *  @param
 */
export const geoLocation = (succcess, reject) => {
	// if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(succcess, e => fail(e, reject), {timeout: 6000})
	// } else {
    //     reject('NONSUPPORT');
	// }
    succcess();
}
