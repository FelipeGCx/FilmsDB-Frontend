import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: { name: "Home" },
  },
  {
    path: "",
    redirect: { name: "Home" },
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/AllView.vue"),
    meta: { title: "Home" },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/LoginView.vue"),
    meta: { title: "Login" },
  },
  {
    path: "/create/content",
    name: "CreateContent",
    component: () => import("@/views/CreateContentView.vue"),
    meta: { title: "Create Content" },
  },
  {
    path: "/create/saga",
    name: "CreateSaga",
    component: () => import("@/views/CreateSagaView.vue"),
    meta: { title: "Create Saga" },
  },
  {
    path: "/create/category",
    name: "CreateCategory",
    component: () => import("@/views/CreateCategoryView.vue"),
    meta: { title: "Create Category" },
  },
  {
    path: "/search",
    name: "Title",
    component: () => import("@/views/TitleView.vue"),
  },
  {
    path: "/category",
    name: "Category",
    component: () => import("@/views/CategoryView.vue"),
  },
  {
    path: "/saga",
    name: "Saga",
    component: () => import("@/views/SagaView.vue"),
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: () => import("@/views/FavoritesView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.title == undefined) {
    if (to.name == "Title" && to.params.title == undefined) {
      document.title = `FilmsDB - Results: ${to.query.title}`;
    } else if (to.name == "Category" && to.params.title == undefined) {
      document.title = `FilmsDB - Category: ${to.state}`;
    } else if (to.name == "Saga" && to.params.title == undefined) {
      document.title = `FilmsDB - Saga: ${to.params.id}`;
    } else {
      document.title = "FilmsDB - " + to.params.title;
    }
  } else {
    document.title = "FilmsDB - " + to.meta.title;
  }
  next();
});

export default router;
