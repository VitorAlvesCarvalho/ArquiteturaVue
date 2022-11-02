import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { homeRoutes } from "@/modules/home/routes";
import { authenticationRoutes } from "@/modules/authentication/routes";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [...homeRoutes, ...authenticationRoutes];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
