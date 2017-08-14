/**
 * 配置开发环境和线上环境
 *
 * baseHost: 主机地址
 * routerMode: 路由模式
 * staticHost: 静态资源主机
 * apiHost: 数据接口主机
 */

let baseHost = '';
let apiHost = '';
let routerMode = 'history';
let staticHost = '';

if (process.env.NODE_ENV == 'development') {

}
else if(process.env.NODE_ENV == 'production'){
	baseHost = 'http://rossi.wang:3001';
	staticHost = 'http://rossi.wang:8081';
	apiHost = 'http://rossi.wang:3101'
}

export {
	baseHost,
	routerMode,
	staticHost,
	apiHost
}
