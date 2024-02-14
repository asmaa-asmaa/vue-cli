//import { createRouter, createWebHashHistory } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";

import MyMain from "@/views/MyMain.vue";
import AboutPage from "@/views/AboutPage.vue";

import ProfilePage from "@/views/ProfilePage.vue";
import MyLearning from "@/views/MyLearning.vue";
import MyWishlist from "@/views/MyWishlist.vue";

import NotFound from "@/views/NotFound.vue";

//import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "my_main",
    component: MyMain,
    meta: {
      title: "home",
    },
  },
  {
    path: "/about",
    name: "about_page",
    component: AboutPage,
    meta: {
      title: "about",
    },
  },
  {
    path: "/profile/:userid/:username",
    name: "my_profile",
    component: ProfilePage,
    meta: {
      title: "profile",
    },
    children: [
      {
        path: "my-learning",
        name: "MyLearning",
        component: MyLearning,
      },
      {
        path: "my-wishlist",
        name: "MyWishlist",
        component: MyWishlist,
      },
    ],
  },

  //{
  // path: "/",
  //name: "home",
  // component: HomeView,
  //},
  //{
  //  path: "/about",
  // name: "about",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  //  component: () =>
  //    import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  //},
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
  next();
});

//router.beforeEach((to, from, next) => {
//if (to.name == "my_profile") {
//return next({ name: "about_page" });
//}
//next();
//});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
router.afterEach((to) => {
  document.title = to.meta.title;
});

export default router;
