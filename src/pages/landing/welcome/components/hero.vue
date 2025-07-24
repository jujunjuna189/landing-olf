<template>
    <section class="lg:h-screen bg-primary lg:pt-64 lg:pb-8 bg-size-[100%] bg-no-repeat bg-[0px_-6rem] lg:bg-[0px_-50rem]" :style="{ backgroundImage: `url(${asset.imgBGHero})` }">
        <div class="flex relative flex-col justify-start lg:justify-start space-y-2 lg:space-y-0 h-full lg:h-auto lg:rounded-[24px] px-5 py-10 lg:py-0 lg:px-44">
            <div class="flex mt-0 lg:mt-0">
                <div class="flex flex-col space-y-2 lg:space-y-5 items-start lg:items-start">
                    <p class="font-semibold text-left lg:text-left text-2xl lg:text-4xl xl:text-5xl leading-8 lg:mt-0 lg:leading-[54px] text-warning">
                        <span class="text-white">ONO</span> LAW FIRM
                    </p>
                    <p class="text-white text-xs lg:text-xs xl:text-base text-left lg:text-left leading-4 lg:leading-relaxed lg:w-[50%]">
                        Ono Law Firm is a leading law firm in Jakarta, Indonesia, dedicated to providing Handling Various Legal Issues, Including Corporate, Personal, and Individual Matters, Ono and Associate Focuses on Business Law, Helping Companies Meet Their Legal Needs...
                    </p>
                    <div class="flex justify-start">
                        <button @click="router.push('/#form')" class="flex bg-primary/30 mt-2 lg:mt-0 mx-auto lg:mx-0 rounded-sm py-2 px-6 cursor-pointer font-medium text-white text-xs lg:text-xs xl:text-base border border-warning hover:border-[#FFC8AA] transition duration-1000 ease-out">
                            Schedule a Consultation
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="lg:h-[40vh]"></div>
    </section>
</template>

<script setup lang="ts">
import 'vue3-carousel/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
import asset from '../../../../assets/asset';
import { useRouter } from 'vue-router';

const router = useRouter();

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