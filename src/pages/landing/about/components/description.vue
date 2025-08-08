<template>
    <div class="py-10 lg:py-18 px-5">
        <div class="lg:flex lg:gap-18 lg:items-center">
            <div class="border-t-2 w-16 border-secondary"></div>
            <span class="text-xl lg:text-5xl font-semibold text-secondary">{{ getLang('about_title1') }}</span>
        </div>
        <div class="lg:grid lg:grid-cols-2">
            <div class="py-5 lg:py-7 lg:pl-[7.5rem] text-sm lg:text-base">
                <p class="text-justify">{{ getLang('about_paragraph1') }}</p>
                <p class="mt-2 text-justify">{{ getLang('about_paragraph2') }}</p>
                <p class="mt-2 text-justify">{{ getLang('about_paragraph3') }}</p>
            </div>
            <div class="py-5 lg:py-7 lg:pl-24 lg:pr-10 text-sm lg:text-base">
                <p class="text-justify">{{ getLang('about_paragraph4') }}</p>
                <p class="mt-2 text-justify">{{ getLang('about_paragraph5') }} </p>
                <p class="mt-2 text-justify">{{ getLang('about_paragraph6') }}</p>
                <p class="mt-2 text-justify">{{ getLang('about_paragraph7') }}</p>
            </div>
        </div>
    </div>
    <div class="bg-slate-100 py-20 px-5">
        <div class="lg:mx-auto lg:flex lg:flex-row lg:items-center lg:gap-8">
            <!-- Image -->
            <div class="lg:w-1/3 flex justify-center mask-b-from-20% mask-b-to-95%">
                <img
                :src="asset.prsn2"
                alt="Jackson Tandiono"
                class="max-w-sm w-full object-contain"
                />
            </div>

            <!-- Text Content -->
            <div class="lg:w-2/3 lg:space-y-3">
                <div class="text-5xl text-orange-500">“</div>
                <p class="text-sm lg:text-base leading-relaxed">
                {{ getLang('about_paragraph8') }}
                </p>
                <p class="text-sm lg:text-base leading-relaxed">
                {{ getLang('about_paragraph9') }}
                </p>
                <p class="text-sm lg:text-base leading-relaxed">
                {{ getLang('about_paragraph10') }}
                </p>
                <p class="text-sm lg:text-base leading-relaxed">
                {{ getLang('about_paragraph11') }}
                </p>

                <!-- Name and Title -->
                <div class="pt-4">
                <p class="font-semibold text-primary text-lg">Jackson Tandiono</p>
                <p class="text-sm text-slate-500">Managing Partner</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import asset from '../../../../assets/asset';
import { getLang } from '../../../../helper/language/language';

</script>