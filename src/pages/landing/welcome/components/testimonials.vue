<template>
    <div class="py-24 bg-stone-100">
        <div class="flex flex-col justify-center items-center">
            <div class="border-t-2 w-14 border-secondary"></div>
            <h3 class="text-4xl text-secondary font-semibold mt-12">Lorem Ipsum</h3>
        </div>
        <div class="px-28 py-24">
            <Carousel v-bind="carouselConfig">
                <Slide v-for="slide in 10" :key="slide">
                    <div class="carousel__item bg-white w-72 h-30 flex justify-center items-center">{{ slide }}</div>
                </Slide>
            </Carousel>
        </div>
        <div class="flex flex-col justify-center items-center mt-10">
            <h3 class="text-4xl text-secondary font-semibold">Testimony</h3>
        </div>
        <div class="px-28 py-10">
            <Carousel v-bind="carouselConfigV2">
                <Slide v-for="slide in 10" :key="slide">
                    <div class="carousel__item bg-white w-[100%] min-h-52 flex justify-center items-center">{{ slide }}</div>
                </Slide>
            </Carousel>
        </div>
    </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';

const carouselConfig = {
    itemsToShow: 5,
    itemsToScroll: 5,
    wrapAround: true,
    autoplay: 3000,
    transition: 5000,
    gap: 0,
}

const carouselConfigV2 = {
    itemsToShow: 1,
    wrapAround: true,
    autoplay: 4000,
    transition: 1000,
    gap: 0,
}
</script>