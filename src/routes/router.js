import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'active',
  scrollBehavior: (to, from ,savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
});

// router.beforeEach(async (routeTo, routeFrom, next) => {
//   const loggedIn = localStorage.getItem("user-ringkas");
//   if (loggedIn || routeTo.name == 'login') {
//     return next();
//   } else {
//     next({ name: "login" });
//   }
// });

export default router;
