<template>
    <div class="py-5 lg:py-20 pb-20 bg-primary overflow-hidden relative">
        <img :src="asset.ptAbstrack" alt="pattern" class="absolute -top-20 right-0 opacity-7 bottom-0 h-[50rem] rotate-45">
        <div class="lg:grid lg:grid-cols-3">
            <div class="lg:flex lg:flex-col lg:justify-between lg:pl-20">
                <div class="flex items-center">
                    <div class="w-36 brightness-800 contrast-90 rounded-full">
                        <img :src="asset.lg" alt="logo-olf">
                    </div>
                    <div class="uppercase">
                        <span class="font-semibold text-xl lg:text-3xl text-white">ONO LAW FIRM</span>
                    </div>
                </div>
                <div class="flex justify-center lg:justify-start">
                    <div>
                        <span class="text-slate-200 text-lg">info@onolawfirm.com</span>
                        <div class="border-t-1 border-secondary mt-2"></div>
                    </div>
                </div>
            </div>
            <div>
                <div class="grid grid-cols-2 px-5 lg:px-0 mt-5 lg:mt-0">
                    <div>
                        <span class="text-warning font-bold text-base">Sitemap</span>
                        <ul class="text-slate-200">
                            <router-link v-for="(item, i) in menuData" :key="`menu-${i}`" :to="item.path"
                                class="hover:text-primary transition-all" active-class="font-normal uppercase"
                                exact-active-class="font-normal uppercase">
                                <li>{{ item.name }}</li>
                            </router-link>
                        </ul>
                    </div>
                    <div>
                        <span class="text-warning font-bold text-base">Explore</span>
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
                            <a href="https://www.instagram.com/ono_attorneyatlaw" target="_blank" class="text-white font-bold">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pr-5 flex flex-col px-5 lg:px-0 mt-5 lg:mt-0">
                <div>
                    <span class="text-warning font-bold text-base">Address Office</span>
                    <p class="text-slate-100 font-medium">Jl.Wijaya I No. 71, Petogogan, Jakarta Selatan, DKI Jakarta, 12170</p>
                    <div class="flex">
                        <div>
                            <span class="text-slate-200">(+62) 822 4040 6112</span>
                            <div class="border-t-1 border-secondary mt-2"></div>
                        </div>
                    </div>
                </div>
                <div class="h-14 grow"></div>
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