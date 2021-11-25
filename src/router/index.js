import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import about from "@/views/About.vue";
import showVideo from "@/views/showVideo.vue";
import fileInsert from "@/views/fileInsert.vue"
import registUser from "@/views/registUser.vue";
import loginUser from "@/views/loginUser.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/example",
    name: "Example",
    component: () =>
      import(/* webpackChunkName: "exmaple" */ "../views/Example.vue"),
  },
  {
    path: "/ab",
    name: "About",
    component: about,
  },
  {
    path: "/showVideo",
    name: "showVideo",
    component: showVideo,
  },
  {
    path: "/fileInsert",
    name: "fileInsert",
    component: fileInsert,
  },
  {
    path: "/registUser",
    name: "registUser",
    component: registUser,
  },
  {
    path: "/loginUser",
    name: "loginUser",
    component: loginUser,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
