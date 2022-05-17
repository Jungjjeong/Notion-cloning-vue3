import { createRouter, createWebHistory } from "vue-router";
import Home from "./Home";
import About from "./About";
import LogIn from "./LogIn";
import Docs from "./Docs";
import DocsId from "./DocsId";
import NotFound from "./NotFound";

export default createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/login",
      name: "login",
      component: LogIn,
    },
    {
      path: "/documents",
      component: Docs,
      children: [
        {
          path: ":id",
          component: DocsId,
        },
      ],
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});
