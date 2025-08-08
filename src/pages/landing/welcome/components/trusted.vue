<template>
    <div class="lg:grid lg:grid-cols-2 px-5 lg:px-0 py-5 lg:py-24">
        <div>
            <div class="flex gap-1 lg:gap-5 items-center">
                <div class="border-t-2 border-secondary w-5 lg:w-20 h-6 mt-4 lg:ml-10 lg:mr-8"></div>
                <span class="text-base lg:text-4xl font-semibold text-secondary">{{ getLang('main_title1') }}</span>
            </div>
        </div>
        <div class="mt-2 lg:mt-0">
            <p class="text-sm lg:text-[17px] text-slate-700">{{ getLang('main_paragraph2') }}</p>
            <div class="flex gap-1 items-center mt-2">
                <div class="w-3 border-t-2 border-secondary"></div>
                <span class="text-secondary font-medium">{{ getLang('read_more') }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getLang } from '../../../../helper/language/language';

</script>