<template>
    <div class="py-10 lg:py-18 px-5">
        <div class="flex gap-18 items-center justify-center">
            <div class="flex flex-col items-center">
                <div class="border-t-2 w-16 border-secondary"></div>
                <span class="text-xl lg:text-5xl font-semibold text-secondary lg:mt-8">{{ getLang('our_team_title1') }}</span>
            </div>
        </div>
        <div class="">
            <div class="py-7 lg:px-10">
                <p class="text-sm lg:text-base text-justify lg:text-center">{{ getLang('our_team_paragraph1') }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getLang } from '../../../../helper/language/language';

</script>