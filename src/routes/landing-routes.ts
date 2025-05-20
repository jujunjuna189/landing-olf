import { RouteRecordRaw } from "vue-router";

const landingRoutes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: () => import("../pages/landing/welcome/welcome.vue"),
        meta: {
            requiresAuth: false,
            title: "",
            description: ""
        }
    },
    {
        path: "/about",
        name: "about",
        component: () => import("../pages/landing/about/about.vue"),
        meta: {
            requiresAuth: false,
            title: "",
            description: ""
        }
    },
    {
        path: "/our-service",
        name: "our-service",
        component: () => import("../pages/landing/service/service.vue"),
        meta: {
            requiresAuth: false,
            title: "",
            description: ""
        }
    },
    {
        path: "/expertise",
        name: "expertise",
        component: () => import("../pages/landing/expertise/expertise.vue"),
        meta: {
            requiresAuth: false,
            title: "",
            description: ""
        }
    },
    {
        path: "/our-team",
        name: "our-team",
        component: () => import("../pages/landing/team/team.vue"),
        meta: {
            requiresAuth: false,
            title: "",
            description: ""
        }
    },
    {
        path: "/our-client",
        name: "our-client",
        component: () => import("../pages/landing/client/client.vue"),
        meta: {
            requiresAuth: false,
            title: "",
            description: ""
        }
    },

    {
        path: "/contact-us",
        name: "contact-us",
        component: () => import("../pages/landing/contact-us/contact-us.vue"),
        meta: {
            requiresAuth: false,
            title: "",
            description: ""
        }
    },
];

export default landingRoutes;