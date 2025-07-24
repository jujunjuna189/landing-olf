<template>
    <div class="sticky top-0 z-10">
        <div class="flex bg-white items-center justify-between border-b">
            <div class="flex items-center lg:w-96 justify-center py-2 px-5 lg:px-0 border-r">
                <div class="w-20 h-20 rounded-full">
                    <img :src="asset.lg" alt="logo-olf">
                </div>
                <div class="uppercase">
                    <span class="font-semibold text-sm lg:text-3xl">ONO LAW FIRM</span>
                </div>
            </div>
            <div class="grow hidden lg:block">
                <nav class="hidden lg:block">
                    <ul class="flex justify-center space-x-10 list-none">
                        <router-link v-for="(item, i) in menuData" :key="`menu-${i}`" :to="item.path"
                            class="hover:text-primary transition-all font-semibold uppercase" :class="[
                                $route.path === item.path ? 'text-primary font-bold' : 'text-secondary'
                            ]" active-class="text-primary font-semibold uppercase"
                            exact-active-class="text-primary font-semibold uppercase">
                            <li>{{ item.name }}</li>
                        </router-link>
                    </ul>
                </nav>
            </div>
            <div class="lg:hidden flex justify-center px-10">
                <ModalMenus :pocket="{}">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="28"  height="28"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-menu-3"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 6h10" /><path d="M4 12h16" /><path d="M7 12h13" /><path d="M4 18h10" /></svg>
                </ModalMenus>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import asset from "../../../assets/asset.ts";
import ModalMenus from "./modal-menus.vue";
import menu from "./navbar.interface.ts";

const menuData = menu;
</script>