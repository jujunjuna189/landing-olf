<template>
    <div class="py-20 pb-20 bg-slate-700">
        <div class="grid grid-cols-3">
            <div class="flex flex-col justify-between pl-20">
                <div class="flex gap-5 items-center">
                    <div class="w-36 h-3w-36 brightness-800 contrast-8 rounded-full">
                        <img :src="asset.lg" alt="logo-olf">
                    </div>
                    <div class="uppercase">
                        <span class="font-semibold text-3xl text-white">OLF</span>
                    </div>
                </div>
                <div class="flex">
                    <div>
                        <span class="text-slate-200 text-lg">contact@.co.id</span>
                        <div class="border-t-1 border-secondary mt-2"></div>
                    </div>
                </div>
            </div>
            <div>
                <div class="grid grid-cols-2">
                    <div>
                        <span class="text-secondary font-bold text-base">Sitemap</span>
                        <ul class="text-slate-200">
                            <router-link v-for="(item, i) in menuData" :key="`menu-${i}`" :to="item.path"
                                class="hover:text-primary transition-all" active-class="font-normal uppercase"
                                exact-active-class="font-normal uppercase">
                                <li>{{ item.name }}</li>
                            </router-link>
                        </ul>
                    </div>
                    <div>
                        <span class="text-secondary font-bold text-base">Explore</span>
                        <ul class="text-slate-200">
                            <router-link v-for="(item, i) in menuData" :key="`menu-${i}`" :to="item.path"
                                class="hover:text-primary transition-all" active-class="font-normal uppercase"
                                exact-active-class="font-normal uppercase">
                                <li>{{ item.name }}</li>
                            </router-link>
                        </ul>
                        <div class="h-14"></div>
                        <div class="flex flex-col leading-4">
                            <span class="text-white font-bold">LinkedIn</span>
                            <span class="text-white font-bold">Instagram</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pr-5">
                <div>
                    <span class="text-secondary font-bold text-base">Address Office</span>
                    <p class="text-slate-100 font-medium">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    <div class="flex">
                        <div>
                            <span class="text-slate-200">(+62) 81297551925</span>
                            <div class="border-t-1 border-secondary mt-2"></div>
                        </div>
                    </div>
                </div>
                <div class="mt-1">
                    <span class="text-secondary font-bold text-base">Address Office 2</span>
                    <p class="text-slate-100 font-medium">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    <div class="flex">
                        <div>
                            <span class="text-slate-200">(+62) 81297551925</span>
                            <div class="border-t-1 border-secondary mt-2"></div>
                        </div>
                    </div>
                </div>
                <div class="h-14"></div>
                <div>
                    <span class="text-white">Copyright &copy; {{new Date().getFullYear()}} OLF. All rights reserved.</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import asset from '../../../assets/asset';
import menu from '../navbar/navbar.interface';

const menuData = menu;
</script>