

/**
 *
 */
// export const isArray = (ary) => {
// 	return Array.isArray(ary);
// }
/**
 *	是否为空数组
 */
export const isEmptyArray = ary => {
	return Array.isArray(ary) && !ary.length;
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
	// if ( !isEmptyObject(source) ) {
	let target = {};
	for (let k in source) {
		!isEmptyObject(source[k]) ? Object.assign( target, deep2Shallow(source[k]) ) : target[k] = source[k];
	}
	return target;
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
export const getStore = name => name && window.localStorage.getItem(name);

/**
 * 删除localStorage
 */
export const removeStore = name => name && window.localStorage.removeItem(name);

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
