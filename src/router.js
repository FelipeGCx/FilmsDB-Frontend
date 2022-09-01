import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: { name: "All", query: { page: 1 } },
  },
  {
    path: "",
    redirect: { name: "All", query: { page: 1 } },
  },
  {
    path: "/all",
    name: "All",
    component: () => import("@/views/AllView.vue"),
    meta: { title: "Inicio" },
  },
  {
    path: "/search",
    name: "Title",
    component: () => import("@/views/TitleView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  //   if (to.meta.title == undefined) {
  //     if (to.name == "Title" && to.params.title == undefined) {
  //       document.title = `FilmsDB - Resultados: ${to.query.title}`;
  //     } else if (to.name == "Category" && to.params.title == undefined) {
  //       document.title = `FilmsDB - Categoria: ${toTitleCase(to.params.id)}`;
  //     } else if (to.name == "Saga" && to.params.title == undefined) {
  //       document.title = `FilmsDB - Saga: ${toTitleCase(to.params.id)}`;
  //     } else {
  //       document.title = "FilmsDB - " + to.params.title;
  //     }
  //   } else {
  document.title = "FilmsDB - " + to.meta.title;
  //   }
  next();
});

export default router;
