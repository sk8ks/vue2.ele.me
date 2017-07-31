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

}

export {
	baseUrl,
	routerMode,
	staticUrl,
	apiUrl
}
