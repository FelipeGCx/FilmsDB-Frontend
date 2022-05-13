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
		path: '/all/',
		name: 'All',
		component: () => import('@/views/Simples/All.vue'),
		meta: { title: 'Inicio' }
	},
	{
		path: '/animes/',
		name: 'Anime',
		component: () => import('@/views/Simples/Anime.vue'),
		meta: { title: 'Animes' }
	},
	{
		path: '/movies/',
		name: 'Movie',
		component: () => import('@/views/Simples/Movie.vue'),
		meta: { title: 'Películas' }
	},
	{
		path: '/series/',
		name: 'Serie',
		component: () => import('@/views/Simples/Serie.vue'),
		meta: { title: 'Series' }
	},
	{
		path: '/create',
		name: 'Create',
		component: () => import('@/views/CreateFilme.vue'),
		meta: { title: 'Añadir Contenido' }
	},
	{
		path: '/add/:type',
		name: 'Add',
		component: () => import('@/views/AddSoC.vue')
	},
	{
		path: '/update/:title',
		name: 'Update',
		component: () => import('@/views/UpdateFilme.vue')
	},
	{
		path: '/search/',
		name: 'Title',
		component: () => import('@/views/Simples/Title.vue')
	},
	{
		path: '/category/:id/',
		name: 'Category',
		component: () => import('@/views/Simples/Category.vue')
		// beforeEnter: [ removeQueryParams ]
	},
	{
		path: '/saga/:id/',
		name: 'Saga',
		component: () => import('@/views/Simples/Saga.vue')
	},
	{
		path: '/favorities/',
		name: 'Favorite',
		component: () => import('@/views/Simples/Favorite.vue'),
		meta: { title: 'Favoritos' }
	},
	{
		path: '/year/',
		name: 'Year',
		component: () => import('@/views/Simples/Year.vue')
	},
	{
		path: '/note/',
		name: 'Note',
		component: () => import('@/views/Simples/Note.vue')
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
		component: () => import('@/views/NotFound.vue'),
		meta: { title: 'Página No Encontrada' }
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});
function toTitleCase(str) {
	return str.replace(/\w\S*/g, function(txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}

router.beforeEach((to, from, next) => {
	if (to.meta.title == undefined) {
		if (to.name == 'Title' && to.params.title == undefined) {
			document.title = `FilmsDB - Resultados: ${to.query.title}`;
		} else if (to.name == 'Category' && to.params.title == undefined) {
			document.title = `FilmsDB - Categoria: ${toTitleCase(to.params.id)}`;
		} else if (to.name == 'Saga' && to.params.title == undefined) {
			document.title = `FilmsDB - Saga: ${toTitleCase(to.params.id)}`;
		} else {
			document.title = 'FilmsDB - ' + to.params.title;
		}
	} else {
		document.title = 'FilmsDB - ' + to.meta.title;
	}
	next();
});

export default router;
