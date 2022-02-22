import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		redirect: { name: 'All', query: { page: 1 } }
	},
	{
		path: '',
		redirect: { name: 'All', query: { page: 1 } }
	},
	{
		path: '/type/:type/',
		name: 'Home',
		component: () => import('@/views/Home.vue')
	},
	{
		path: '/all/',
		name: 'All',
		component: () => import('@/views/Simples/All.vue')
	},
	{
		path: '/anime/',
		name: 'Anime',
		component: () => import('@/views/Simples/Anime.vue')
	},
	{
		path: '/movie/',
		name: 'Movie',
		component: () => import('@/views/Simples/Movie.vue')
	},
	{
		path: '/serie/',
		name: 'Serie',
		component: () => import('@/views/Simples/Serie.vue')
	},
	{
		path: '/create',
		name: 'Create',
		component: () => import('@/views/CreateFilme.vue')
	},
	{
		path: '/update/:title',
		name: 'Update',
		component: () => import('@/views/UpdateFilme.vue')
	},
	// {
	// 	path: '/search/:title',
	// 	redirect: {
	// 		name: 'Title',
	// 		params: {
	// 			title: 'cora',
	// 			page: 1
	// 		}
	// 	}
	// },
	// {
	// 	path: '/search/:title/',
	// 	name: 'Title',
	// 	component: () => import('@/views/Simples/Title.vue')
	// },
	{
		path: '/search/:title/',
		name: 'Title',
		component: () => import('@/views/Simples/Title.vue'),
	},
	{
		path: '/category/:id/',
		name: 'Category',
		component: () => import('@/views/Simples/Category.vue')
	},
	{
		path: '/saga/:id/',
		name: 'Saga',
		component: () => import('@/views/Simples/Saga.vue')
	},
	{
		path: '/favorities/',
		name: 'Favorite',
		component: () => import('@/views/Simples/Favorite.vue')
	},
	{
		path: '/year/:year/',
		name: 'Year',
		component: () => import('@/views/Simples/Year.vue')
	},
	{
		path: '/test/',
		name: 'test',
		component: () => import('@/views/test.vue')
	},
	// {
	// 	path: '/loading',
	// 	name: 'Loading',
	// 	component: () => import('@/components/Loading.vue')
	// },
	// {
	// 	path: '/create/filme',
	// 	name: 'CreateFilme',
	// 	component: () => import('@/views/CreateFilme.vue')
	// },
	{
		path: '/:catchAll(.*)',
		name: 'NotFound',
		component: () => import('@/views/NotFound.vue')
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});
// router.beforeEach((to, from, next) => {
// 	// if (to.name == from.name) {
// 	// 	window.location = to.fullPath;
// 	// }
// 	// if (to.meta.title == undefined) {
// 	// 	document.title = 'Shared-P - ' + to.params.title;
// 	// }else {
// 	// 	document.title = 'Shared-P - ' + to.meta.title;
// 	// }
// 	next();
// });

export default router;
