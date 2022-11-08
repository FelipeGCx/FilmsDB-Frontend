import { createRouter, createWebHistory } from "vue-router";
import { apolloClient } from "./utils/apolloConfig";
import gql from "graphql-tag";

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
    meta: { title: "Home", requireAdmin: false, requireLogin: false },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/LoginView.vue"),
    meta: { title: "Login", requireAdmin: false, requireLogin: false },
  },
  {
    path: "/create/content",
    name: "CreateContent",
    component: () => import("@/views/CreateContentView.vue"),
    meta: { title: "Create Content", requireAdmin: true, requireLogin: true },
  },
  {
    path: "/update/content",
    name: "UpdateContent",
    component: () => import("@/views/UpdateContentView.vue"),
    meta: { title: "Update Content", requireAdmin: true, requireLogin: true },
  },
  {
    path: "/create/saga",
    name: "CreateSaga",
    component: () => import("@/views/CreateSagaView.vue"),
    meta: { title: "Create Saga", requireAdmin: true, requireLogin: true },
  },
  {
    path: "/create/category",
    name: "CreateCategory",
    component: () => import("@/views/CreateCategoryView.vue"),
    meta: {
      title: "Create Category",
      requireAdmin: true,
      requireLogin: true,
    },
  },
  {
    path: "/search",
    name: "Title",
    component: () => import("@/views/TitleView.vue"),
    meta: { requireAdmin: false, requireLogin: false },
  },
  {
    path: "/category",
    name: "Category",
    component: () => import("@/views/CategoryView.vue"),
    meta: { requireAdmin: false, requireLogin: false },
  },
  {
    path: "/saga",
    name: "Saga",
    component: () => import("@/views/SagaView.vue"),
    meta: { requireAdmin: false, requireLogin: false },
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: () => import("@/views/FavoritesView.vue"),
    meta: { requireAdmin: false, requireLogin: false },
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import("@/views/NotFoundView.vue"),
    meta: { title: "Not Found", requiresAuth: false, requiresAdmin: false },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

function setTitle(to) {
  let title;
  if (to.meta.title == undefined) {
    if (to.name == "Title" && to.params.title == undefined) {
      title = `FilmsDB - Results: ${to.query.title}`;
    } else if (to.name == "Category" && to.params.title == undefined) {
      title = `FilmsDB - Category: ${to.query.category}`;
    } else if (to.name == "Saga" && to.params.title == undefined) {
      title = `FilmsDB - Saga: ${to.query.saga}`;
    } else {
      title = "FilmsDB - " + to.params.title;
    }
  } else {
    title = "FilmsDB - " + to.meta.title;
  }
  return title;
}

function userIsLogin(token) {
  return token != null;
}

async function setGuard(to) {
  if (!to.meta.requireAdmin && !to.meta.requireLogin) {
    return true;
  } else {
    let token = localStorage.getItem("tokenAccess");
    let isLogin = userIsLogin(token);
    let isAdmin = await userIsAdmin(token);
    // let isLogin = true;
    // let isAdmin = true;
    console.log("es admin: ", isAdmin);
    if (isAdmin && isLogin) {
      return true;
    }
    return false;
  }
}

async function userIsAdmin(token) {
  if (token === null) {
    return false;
  }
  var result = await apolloClient.mutate({
    mutation: gql`
      mutation VerifyToken($token: String) {
        verifyToken(token: $token) {
          data {
            roles
          }
          error
        }
      }
    `,
    variables: {
      token: token,
    },
  });
  console.log(result);
  return result.data.verifyToken.data.roles.includes("ROLE_ADMIN");
  // } catch {
  //   localStorage.clear();
  //   return false;
  // }
}

router.beforeEach(async (to, from, next) => {
  window.scrollTo(0, 0);
  document.title = setTitle(to);
  let guard = await setGuard(to);
  if (guard) {
    next();
  } else {
    // next();
    next({ name: "NotFound" });
  }
});

export default router;
