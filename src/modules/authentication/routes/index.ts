import { RouteConfig } from "vue-router";
import { Authentication } from "@/modules/authentication/views";

export const authenticationRoutes: Array<RouteConfig> = [
  {
    path: "/authentication",
    name: "authentication",
    component: Authentication,
  },
];
