import App from '@/App'

const construction = r => require.ensure([], () => r(require('components/common/construction')), 'construction');
const home = r => require.ensure([], () => r(require('views/home/home')), 'home');
const categories = r => require.ensure([], () => r(require('views/categories/categories')), 'home');

export default [
	{
		path: '/',
		component: App,
		children: [
			{
				path: '',
				component: home,
			},
			// {
			// 	path: '',
			// 	redirect: '/msite',
			// },
			{
				path: 'msite',
				component: home,
				children: [
					// {
					// 	path: 'food',
					// 	component: construction
					// },
				]
			},
			{
				path: 'msite/food',
				component: categories,
				meta: {

				}
			},
			{
				path: 'discover',
				component: construction,
			},
			{
				path: 'order',
				component: construction,
			},
			{
				path: 'profile',
				component: construction,
			},
		]
	}
];
