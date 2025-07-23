<template>
    <div class="sticky top-0 z-10">
        <div class="flex bg-white items-center border-b">
            <div class="flex items-center w-96 justify-center py-2 border-r">
                <div class="w-20 h-20  rounded-full">
                    <img :src="asset.lg" alt="logo-olf">
                </div>
                <div class="uppercase">
                    <span class="font-semibold text-3xl">ONO LAW FIRM</span>
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
        </div>
    </div>
</template>

<script setup lang="ts">
import asset from "../../../assets/asset.ts";
import menu from "./navbar.interface.ts";

const menuData = menu;
</script>