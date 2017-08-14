// const {cookies} = require('@/plugins/cookies.min');
import '@/plugins/js.cookie';
/**
 *	是否为空数组
 */
export const isEmptyArray = arr => {
	return Array.isArray(arr) && !arr.length;
}

/**
 *	判断是否字符串
 */
export const isString = str => typeof str === 'string';
/**
 *	判断是否对象
 */
export const isObject = obj => typeof obj === 'object';
/**
 *	判断对象是否为空对象
 */
export const isEmptyObject = obj => obj && (isObject(obj) && !Object.keys(obj).length);

/**
 *	把一个多层对象转化为单层对象
 */
export const deep2Shallow = source => {
	let target = {};
	for (let k in source) {
		!isEmptyObject(source[k]) ? Object.assign( target, deep2Shallow(source[k]) ) : target[k] = source[k];
	}
	return target;
}
/**
 * 序列化对象
 * @param  {[string]} serializeString [description]
 * @return {[type]}                 [description]
 */
export const serializeObject = serializeString => {
	return typeof serializeString === 'string' ? serializeString.split('&').map((v,i,a) => {
		const kv = v.split('=');
		return Object.defineProperty({}, kv[0], {
			value: typeof kv[1] === 'string' &&  kv[1].indexOf('=') > -1 ? serializeObject(kv[1]) : kv[1],
			enumerable:true,
		});
	}) : '';
}
/**
 * 数组转对象 [{a:1},{b:1},[{c:1}]] => {a:1, b:1, c:1}
 * @param  {[array]} arr [数组]
 * @return {[object]}     [一个对象]
 */
export const array2Object = (arr = [], obj = {}) => {
	Array.isArray(arr) ?
		arr.forEach((v,i,a) => {
			Array.isArray(v) ?
				Object.assign(obj, array2Object(v, obj)) : typeof v === 'object' ?
					Object.assign(obj, v) : Object.defineProperty(obj, i, {value: v});
		}) : Object.defineProperty(obj, 0, {value: arr});
	return obj;


	// if (Array.isArray(arr)) {
	// 	arr.forEach((v,i,a) => {
	// 		if (Array.isArray(v)) {
	// 			Object.assign(_obj_, array2Object(v, obj));
	// 		} else if (typeof v === 'object') {
	// 			Object.assign(_obj_, v);console.log(_obj_, v)
	// 		} else {
	// 			Object.defineProperty(_obj_, i, {value: v});
	// 		}
	// 	})
	// }
}

/**
 *	把对象转化为数组
 */
export const obj2Array = source => {
	let target = [], k = null;
	for (k in source) {
		target.push(source[k]);
	}
	return target;
}


/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
	if (!name) return;
	if (typeof content !== 'string') {
		content = JSON.stringify(content);
	}
	window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
export const getStore = name => typeof name === 'string' && window.localStorage.getItem(name);

/**
 * 删除localStorage
 */
export const removeStore = name => name && window.localStorage.removeItem(name);
/**
 * 存储sessionStorage
 */
export const setSession = (name, content) => {
	if (typeof name === 'string') {
		typeof content !== 'string' && (content = JSON.stringify(content));
		window.sessionStorage.setItem(name, content);
	}
}
/**
 * [setCookies description]
 * @param {String} name   [description]
 * @param {String} content [description]
 */
export const setCookies = (name, content) => {
	if (typeof name === 'string') {
		typeof content !== 'string' && (content = JSON.stringify(content));
		Cookies.set(name, content);
	}
}
/**
 * [getCookies description]
 * @param  {String} name [description]
 * @return {[type]}     [description]
 */
export const getCookies = name => typeof name === 'string' ? Cookies.get(name) : '';
/**
 * [removeCookie description]
 * @param  {String} name [description]
 * @return {[type]}     [description]
 */
export const removeCookies = name => {
	if( typeof name === 'string' ) {
		Cookies.remove(name);
	}
}

/**
 * 获取style样式
 */
export const getStyle = (element, attr, NumberMode = 'int') => {
    let target;
    // scrollTop 获取方式不同，没有它不属于style，而且只有document.body才能用
    if (attr === 'scrollTop') {
        target = element.scrollTop;
    }else if(element.currentStyle){
        target = element.currentStyle[attr];
    }else{
        target = document.defaultView.getComputedStyle(element,null)[attr];
    }
    //在获取 opactiy 时需要获取小数 parseFloat
    return  NumberMode == 'float'? parseFloat(target) : parseInt(target);
}
/**
 * 一定时间内只执行一次
 */
export const throttle = (fn, delay) => {
	var now, lastExec, timer, context, args; //eslint-disable-line

	var execute = function () {
    	fn.apply(context, args);
    	lastExec = now;
  	};

  	return () => {
    	context = this;
    	args = arguments;
    	now = Date.now();

    	if (timer) {
      		clearTimeout(timer);
      		timer = null;
    	}

    	if (lastExec) {
      		var diff = delay - (now - lastExec);
      		if (diff < 0) {
        		execute();
      		} else {
        		timer = setTimeout(() => {
          			execute();
        		}, diff);
      		}
		} else {
      		execute();
    	}
  	};
};
/**
 * 睡眠函数，模拟响应时间
 * @param  {Number} ms [description]
 * @return {[type]}    [description]
 */
async function timeout (ms) {
	await new Promise(resolve => {
    	setTimeout(resolve, ms);
  	});
}
export async function sleep (ms) {
  	await timeout(ms);
}
