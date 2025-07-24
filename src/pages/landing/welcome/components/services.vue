<template>
    <div class="lg:grid lg:grid-cols-2">
        <div class="bg-slate-200 grayscale brightness-100" :style="{ backgroundImage: `url(${asset.imgBGService})` }"></div>
        <div class="py-5 lg:py-40 bg-primary px-5 lg:px-24">
            <div class="border-t-2 border-warning w-20 h-6"></div>
            <span class="text-xl lg:text-4xl font-semibold text-warning">Services</span>
            <div class="mt-7">
                <p class="text-slate-200 text-sm lg:text-base">At Ono Law Firm, we believe that a strong client relationship is the foundation of successful legal representation. We take the time to understand our clients' unique needs and goals, and we work closely with them to develop tailored legal strategies that achieve their desired outcomes. We are passionate about advocating for our clients' interests and protecting their rights.</p>
            </div>
            <div class="flex mt-8 items-center">
                <div class="flex gap-2 items-center animate-pulse-grow" @click="router.push('/our-service')">
                    <svg class="text-warning"  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
                    <span class="text-warning font-medium text-lg cursor-pointer">Explore Our Services</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import asset from '../../../../assets/asset';

const router = useRouter();

</script>