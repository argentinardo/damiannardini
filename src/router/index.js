import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Bienvenidos",
    component: Home
  },
  {
    path: "/about-me",
    name: "Sobre mi",
    component: () =>
      import(/* webpackChunkName: "aboutMe" */ "../views/AboutMe.vue")
  },
  {
    path: "/contact",
    name: "Contacto",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue")
  },
  {
    path: "/thanks",
    name: "success",
    component: () =>
      import(/* webpackChunkName: "Submission" */ "../views/ContactSuccess.vue")
  },
  {
    path: "/404",
    name: "fail",
    component: () =>
      import(
        /* webpackChunkName: "SubmissionFail" */ "../views/ContactError.vue"
      )
  },
  {
    path: "/drawing",
    name: "Ilustraciones",
    component: () =>
      import(/* webpackChunkName: "drawing" */ "../views/Drawing.vue")
  },
  {
    path: "/aboutWeb",
    name: "Sobre esta web",
    component: () =>
      import(/* webpackChunkName: "drawing" */ "../views/AboutWeb.vue")
  },
  {
    path: "/experience",
    name: "Experiencia",
    component: () =>
      import(/* webpackChunkName: "experience" */ "../views/Experience.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
