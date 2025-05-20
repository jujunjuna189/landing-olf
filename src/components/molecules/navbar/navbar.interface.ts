import { ref } from "vue";

export interface NavbarIF {
    name: string;
    path: string;
    icon: string;
}

const menu = ref<NavbarIF[]>([
    {
        name: "Home",
        path: "/",
        icon: "",
    },
    {
        name: "About",
        path: "/about",
        icon: "",
    },
    {
        name: "Our Service",
        path: "/our-service",
        icon: "",
    },
    {
        name: "Expertise",
        path: "/expertise",
        icon: "",
    },
    {
        name: "Our Team",
        path: "/our-team",
        icon: "",
    },
    {
        name: "Our Client",
        path: "/our-client",
        icon: "",
    },
    {
        name: "Contact Us",
        path: "/contact-us",
        icon: "",
    },
]);

export default menu;