import { ref } from "vue";
import { getLang } from "../../../helper/language/language";

export interface NavbarIF {
    name: string;
    path: string;
    icon: string;
}

const menu = ref<NavbarIF[]>([
    {
        name: getLang('home'),
        path: "/",
        icon: "",
    },
    {
        name: getLang('about'),
        path: "/about",
        icon: "",
    },
    {
        name: getLang('our_service'),
        path: "/our-service",
        icon: "",
    },
    {
        name: getLang('expertise'),
        path: "/expertise",
        icon: "",
    },
    {
        name: getLang('our_team'),
        path: "/our-team",
        icon: "",
    },
    {
        name: getLang('our_client'),
        path: "/our-client",
        icon: "",
    },
    {
        name: getLang('contact_us'),
        path: "/contact-us",
        icon: "",
    },
]);

export default menu;