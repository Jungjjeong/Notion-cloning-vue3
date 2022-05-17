import router from "./index";
import store from "~/store";

router.beforeEach((to) => {
  console.log(to);
  if (to.meta.requiresAuth && !store.state.user.isLoggedIn) {
    return {
      path: "/login",
      query: { redirect: to.fullPath },
    };
  }
});
