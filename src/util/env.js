/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * staticUrl: 静态资源域名地址
 * apiUrl: 接口域名地址
 */

let baseUrl = '';
let apiUrl = '';
let routerMode = 'history';
let staticUrl = '';

if (process.env.NODE_ENV == 'development') {

}
else if(process.env.NODE_ENV == 'production'){
	baseUrl = 'http://rossi.wang:3001';
	staticUrl = 'http://rossi.wang:8081';
	apiUrl = 'http://rossi.wang:3101'
}

export {
	baseUrl,
	routerMode,
	staticUrl,
	apiUrl
}
