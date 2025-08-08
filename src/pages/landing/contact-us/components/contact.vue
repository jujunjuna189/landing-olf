<template>
    <div class="col-span-3 mb-10 px-5 lg:px-0">
        <div class="flex gap-2 items-center">
            <h2 class="text-xl lg:text-4xl font-semibold text-secondary" v-html="getLang('contact_us_title1')"></h2>
            <div class="border-t-2 w-16 border-secondary"></div>
        </div>
        <div class="lg:pr-5 flex flex-col h-full">
            <div class="mt-8">
                <span class="text-secondary font-bold text-base">{{ getLang('address_office') }}</span>
                <div class="flex gap-2 items-start mt-3">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-map-pin text-slate-500"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></svg>
                    <p class="font-normal text-sm lg:text-base">
                        Jl.Wijaya I No. 71, Petogogan, Jakarta Selatan, DKI Jakarta, 12170
                    </p>
                </div>
                <div class="mt-3">
                    <div class="flex gap-2 items-center">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-phone text-slate-500"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
                        <span class="text-sm lg:text-base">(+62) 822 4040 6112</span>
                    </div>
                    <div class="w-60 border-t-1 border-secondary mt-2"></div>
                </div>
            </div>
            <div class="h-10"></div>
            <div class="flex gap-2 items-center">
                <h2 class="text-xl lg:text-4xl font-semibold text-secondary">{{ getLang('contact_us_title2') }}</h2>
                <div class="border-t-2 w-16 border-secondary grow"></div>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d126906.97520362909!2d106.89097593334279!3d-6.284362415605013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1734288428822!5m2!1sen!2sid"
                width="100%"
                height="100%"
                class="border border-slate-300"
                allowFullScreen=""
                preload
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
            />
            <div class="flex gap-2 items-center mt-5">
                <h2 class="text-xl lg:text-4xl font-semibold text-secondary">{{ getLang('contact_us_title3') }}</h2>
                <div class="border-t-2 w-16 border-secondary grow"></div>
            </div>
            <div class="flex gap-2 mt-2">
                <a href="https://www.instagram.com/ono_attorneyatlaw" target="_blank" class="bg-slate-300 p-1 rounded-lg">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="60"  height="60"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="text-slate-700"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16.5 7.5v.01" /></svg>
                </a>
                <div class="bg-slate-300 p-1 rounded-lg">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="60"  height="60"  viewBox="0 0 24 24"  fill="currentColor"  class="text-slate-700"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1 -5 5h-10a5 5 0 0 1 -5 -5v-10a5 5 0 0 1 5 -5zm-9 8a1 1 0 0 0 -1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0 -1 -1m6 0a3 3 0 0 0 -1.168 .236l-.125 .057a1 1 0 0 0 -1.707 .707v5a1 1 0 0 0 2 0v-3a1 1 0 0 1 2 0v3a1 1 0 0 0 2 0v-3a3 3 0 0 0 -3 -3m-6 -3a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" /></svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getLang } from '../../../../helper/language/language';

</script>