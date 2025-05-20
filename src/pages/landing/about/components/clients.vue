<template>
    <div class="py-16 bg-stone-100">
        <div class="flex flex-col justify-center items-center">
            <h3 class="text-5xl text-secondary font-semibold">Clients</h3>
        </div>
        <div class="px-10 pt-28 pb-10">
            <Carousel v-bind="carouselConfig">
                <Slide v-for="(item, i) in clients" :key="i">
                    <div class="carousel__item w-72 h-30 flex justify-center items-center grayscale brightness-200 contrast-2">
                        <img :src="item.logo" alt="logo-client" class="w-full h-full object-contain ">
                    </div>
                </Slide>
            </Carousel>
        </div>
    </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
import asset from '../../../../assets/asset';

const carouselConfig = {
    itemsToShow: 5,
    itemsToScroll: 5,
    wrapAround: true,
    autoplay: 3000,
    transition: 5000,
    gap: 0,
}

const clients = [
  { logo: asset.lg1 },
  { logo: asset.lg2 },
  { logo: asset.lg3 },
  { logo: asset.lg4 },
  { logo: asset.lg5 },
];


</script>