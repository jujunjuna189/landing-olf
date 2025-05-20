<template>
    <section class="h-screen bg-primary lg:h-auto lg:pt-64 lg:pb-8 bg-size-[100%] bg-no-repeat" :style="{ backgroundImage: `url(${asset.imgBGHero})`, backgroundPosition: '0px -50rem' }">
        <div class="flex relative flex-col justify-end md:justify-start space-y-2 lg:space-y-0 h-full lg:h-auto lg:rounded-[24px] px-0 lg:px-44">
            <div class="flex mt-0 md:mt-56 lg:mt-0">
                <div class="flex flex-col space-y-2 md:space-y-5 justify-start lg:justify-center md:items-start">
                <p class="font-semibold text-center md:text-left text-3xl md:text-5xl lg:text-4xl xl:text-5xl leading-8 md:mt-0 md:leading-[54px] text-warning">
                    <span class="text-white">ONO</span> LAW FIRM
                </p>
                <p class="text-white text-xs md:text-base lg:text-xs xl:text-base text-center md:text-left leading-4 md:leading-relaxed w-[50%]">
                    Ono Law Firm is a leading law firm in Jakarta, Indonesia, dedicated to providing Handling Various Legal Issues, Including Corporate, Personal, and Individual Matters, Ono and Associate Focuses on Business Law, Helping Companies Meet Their Legal Needs...
                </p>
                <button class="flex bg-primary/30 mt-2 md:mt-0 mx-auto md:mx-0 rounded-sm py-2 px-6 cursor-pointer font-medium text-white text-xs md:text-base lg:text-xs xl:text-base border border-warning hover:border-[#FFC8AA] transition duration-1000 ease-out">
                    Schedule a Consultation
                </button>
                </div>
            </div>
        </div>
        <div class="h-[31vh]"></div>
        <Carousel v-bind="carouselConfig">
            <Slide v-for="(item, i) in logos" :key="i">
                <div class="carousel__item w-40 h-30 flex justify-center items-center grayscale brightness-200 contrast-2">
                    <img :src="item.logo" alt="logo">
                </div>
            </Slide>
        </Carousel>
    </section>
</template>

<script setup lang="ts">
import 'vue3-carousel/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
import asset from '../../../../assets/asset';

const carouselConfig = {
    itemsToShow: 7,
    wrapAround: true,
    autoplay: 1500,
    transition: 2500,
    gap: 0,
}

const logos = [
    {
        logo: asset.lg1,
    },
    {
        logo: asset.lg7,
    },
    {
        logo: asset.lg6,
    },
    {
        logo: asset.lg4,
    },
    {
        logo: asset.lg5,
    },
]

</script>