<template>
    <div class="py-10 lg:py-18 px-5">
        <div class="lg:flex lg:gap-18 lg:items-center">
            <div class="border-t-2 w-16 border-secondary"></div>
            <span class="text-xl lg:text-5xl font-semibold text-secondary">{{ getLang('our_service_title1') }}</span>
        </div>
        <div class="">
            <div class="py-7 lg:pl-[7.5rem]">
                <p class="text-justify text-sm lg:text-base">{{ getLang('our_service_paragraph1') }}</p>
            </div>
        </div>
    </div>
    <div class="lg:pt-4 pb-24 px-5 lg:px-8">
        <div class="flex flex-wrap gap-7 justify-center">
            <div v-for="(item, i) in services" :key="i" class="max-w-[25rem]">
                <div class="bg-stone-100 py-10 h-full text-center lg:px-10">
                    <div class="px-5">
                        <div class="flex justify-center">
                            <div class="bg-warning/50 text-primary rounded-full h-20 w-20 flex justify-center items-center">
                                <div v-html="item.icon" />
                            </div>
                        </div>
                        <p class="font-bold mt-5 text-sm lg:text-base">{{ item.title }}</p>
                    </div>
                    <div class="px-5 text-black/80 mt-5 text-sm lg:text-base" v-html="item.description"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getLang } from '../../../../helper/language/language';


const services = [
    {
        icon: `<svg  xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-gavel"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 10l7.383 7.418c.823 .82 .823 2.148 0 2.967a2.11 2.11 0 0 1 -2.976 0l-7.407 -7.385" /><path d="M6 9l4 4" /><path d="M13 10l-4 -4" /><path d="M3 21h7" /><path d="M6.793 15.793l-3.586 -3.586a1 1 0 0 1 0 -1.414l2.293 -2.293l.5 .5l3 -3l-.5 -.5l2.293 -2.293a1 1 0 0 1 1.414 0l3.586 3.586a1 1 0 0 1 0 1.414l-2.293 2.293l-.5 -.5l-3 3l.5 .5l-2.293 2.293a1 1 0 0 1 -1.414 0z" /></svg>`,
        title: getLang('our_service_title2'),
        description: getLang('our_service_paragraph2')
    },
    {
        icon: `<svg  xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-file-text"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M9 9l1 0" /><path d="M9 13l6 0" /><path d="M9 17l6 0" /></svg>`,
        title: getLang('our_service_title3'),
        description: getLang('our_service_paragraph3') + '<br /><br/>' + getLang('our_service_paragraph4')
    },
    {
        icon: `<svg  xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-calculator"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 3m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M8 7m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" /><path d="M8 14l0 .01" /><path d="M12 14l0 .01" /><path d="M16 14l0 .01" /><path d="M8 17l0 .01" /><path d="M12 17l0 .01" /><path d="M16 17l0 .01" /></svg>`,
        title: getLang('our_service_title4'),
        description: getLang('our_service_paragraph5')
    },
    {
        icon: `<svg  xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-buildings"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 21v-15c0 -1 1 -2 2 -2h5c1 0 2 1 2 2v15" /><path d="M16 8h2c1 0 2 1 2 2v11" /><path d="M3 21h18" /><path d="M10 12v0" /><path d="M10 16v0" /><path d="M10 8v0" /><path d="M7 12v0" /><path d="M7 16v0" /><path d="M7 8v0" /><path d="M17 12v0" /><path d="M17 16v0" /></svg>`,
        title: getLang('our_service_title5'),
        description: getLang('our_service_paragraph6')
    },
    {
        icon: `<svg  xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-lamp"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 20h6" /><path d="M12 20v-8" /><path d="M5 12h14l-4 -8h-6z" /></svg>`,
        title: getLang('our_service_title6'),
        description: getLang('our_service_paragraph7') + '<br /><br/>' + getLang('our_service_paragraph8')
    },
];

</script>