import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: { name: "Home", query: { page: 1 } },
  },
  {
    path: "",
    redirect: { name: "Home", query: { page: 1 } },
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
    path: "/search",
    name: "Title",
    component: () => import("@/views/AllView.vue"),
  },
  {
    path: "/category",
    name: "Category",
    component: () => import("@/views/CategoryView.vue"),
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
