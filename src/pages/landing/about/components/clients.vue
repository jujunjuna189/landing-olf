<template>
    <div class="py-8 lg:py-16 bg-stone-100">
        <div class="flex flex-col justify-center items-center">
            <h3 class="text-xl lg:text-5xl text-secondary font-semibold">{{ getLang('about_title1') }}</h3>
        </div>
        <div class="px-5 lg:px-10 pt-10 lg:pt-28 pb-10">
            <Carousel v-bind="carouselConfig">
                <Slide v-for="(item, i) in clients" :key="i">
                    <div class="carousel__item w-72 h-30 mx-2 lg:mx-0 flex justify-center items-center grayscale brightness-200 contrast-2">
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
import { getLang } from '../../../../helper/language/language';

const carouselConfig = {
    itemsToShow: 5,
    itemsToScroll: 5,
    wrapAround: true,
    autoplay: 3000,
    transition: 5000,
    gap: 0,
}

const clients = [
  { logo: asset.logNipress },
  { logo: asset.logSky },
  { logo: asset.log1 },
  { logo: asset.logDmt },
  { logo: asset.logGkb },
  { logo: asset.logIb },
  { logo: asset.logMmp },
  { logo: asset.logTnt },
  { logo: asset.logTrinitan },
];


</script>