<template>
    <div class="flex gap-2 justify-center px-24">
        <div class="grow">
            <SearchField placeholder="Search..." />
        </div>
        <div class="w-72">
            <div class="border border-stone-300 py-2 px-3 flex justify-between items-center bg-stone-200">
                <span class="text-stone-800 font-semibold">Position</span>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SearchField from '../../../../components/atoms/field/search-field.vue';

</script>