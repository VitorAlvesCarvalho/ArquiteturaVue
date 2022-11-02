import { RouteConfig } from "vue-router";
import { Home } from "@/modules/home/views";

export const homeRoutes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
];
