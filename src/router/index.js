import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about-me",
    name: "AboutMe",
    component: () =>
      import(/* webpackChunkName: "aboutMe" */ "../views/AboutMe.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue")
  },
  {
    path: "/drawing",
    name: "Drawing",
    component: () =>
      import(/* webpackChunkName: "drawing" */ "../views/Drawing.vue")
  },
  {
    path: "/experience",
    name: "Experience",
    component: () =>
      import(/* webpackChunkName: "experience" */ "../views/Experience.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
