<template>
    <div class="lg:pt-28 lg:pb-28 border-t-2 border-secondary">
        <div class="lg:grid lg:grid-cols-5">
            <div class=""></div>
            <div class="lg:flex lg:gap-10 leading-3 lg:col-span-4 lg:pr-24">
                <div class="border-t-2 border-secondary lg:w-14 lg:min-w-14 lg:max-w-14 h-2 mt-8"></div>
                <div class="px-5 lg:px-0 py-5 lg:py-0">
                    <span class="lowercase text-base lg:text-2xl font-medium">{{ getLang('main_title7') }}</span>
                    <div class="leading-6">
                        <p class="mt-4 text-slate-700 text-justify text-sm lg:text-base">{{ getLang('main_paragraph5') }}</p>
                        <p class="text-slate-700 text-justify text-sm lg:text-base">{{ getLang('main_paragraph6') }}</p>
                    </div>
                    <div class="flex">
                        <a :href="asset.fileProfile" :download="asset.fileProfile" class="flex bg-opacity-50 mt-5 mx-auto md:mx-0 rounded-[3px] py-2 cursor-pointer px-6 text-xs md:text-base lg:text-xs xl:text-base border-2 border-secondary hover:border-[#FFC8AA] transition duration-1000 ease-out">
                            {{ getLang('download_our_portofolio') }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import asset from '../../../../assets/asset';
import { getLang } from '../../../../helper/language/language';

</script>