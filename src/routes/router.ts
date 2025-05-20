import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import landingRoutes from "./landing-routes";

const routes: Array<RouteRecordRaw> = [
    ...landingRoutes,
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;