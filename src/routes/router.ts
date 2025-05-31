import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import landingRoutes from "./landing-routes";

const routes: Array<RouteRecordRaw> = [
    ...landingRoutes,
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const el = document.querySelector(to.hash);
                    if (el) {
                        const yOffset = -100;
                        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                    resolve();
                }, 300);
            });
        }

        return { top: 0 };
    }
});

export default router;