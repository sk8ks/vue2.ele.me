import App from '@/App'

const construction = r => require.ensure([], () => r(require('components/common/construction')), 'construction');
const home = r => require.ensure([], () => r(require('views/home/home')), 'home');
const categories = r => require.ensure([], () => r(require('views/categories/categories')), 'home');
const profile = r => require.ensure([], () => r(require('views/profile/profile')), 'profile');
const order = r => require.ensure([], () => r(require('views/order/order')), 'order');
const login = r => require.ensure([], () => r(require('views/login/login')), 'login');

export default [
	{
		path: '/',
		component: App,
		children: [
			{
				path: '',
				name: 'home',
				component: home,
			},
			{
				path: '/login',
				name: 'login',
				component: login,
				meta: {
					loginRedirect: '/profile'		// 登录跳转
				}
			},
			// {
			// 	path: '',
			// 	redirect: '/msite',
			// },
			{
				path: '/msite',
				name: 'msite',
				component: home,
				children: [
					// {
					// 	path: 'food',
					// 	component: construction
					// },
				]
			},
			{
				path: '/msite/food',
				name: 'category',
				component: categories,
				meta: {

				}
			},
			{
				path: '/discover',
				name: 'discover',
				component: construction,
			},
			{
				path: '/order',
				name: 'order',
				component: order,
				meta: {
					auth: 1
				}
			},
			{
				path: '/profile',
				name: 'profile',
				component: profile,
				children: [
					{	// 优惠券
						path: 'benefit',
						name: 'benefit',
						component: construction,
					},
					{	// 积分
						path: 'points',
						name: 'points',
						component: construction,
					},
					{	// 帐号信息
						path: 'info',
						name: 'info',
						component: construction,
					},
				]
			},
			{	// 积分商城
				path: '/gift',
				name: 'gift',
				component: construction,
			},
			{	// 会员卡
				path: '/vipcard',
				name: 'vipcard',
				component: construction,
			},
			{	// 会员卡
				path: '/service',
				name: 'service',
				component: construction,
			},
			{	// 下载中心
				path: '/download',
				name: 'download',
				component: construction,
			}
		]
	}
];
