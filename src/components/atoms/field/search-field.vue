<template>
    <div class="flex border border-stone-300">
        <input type="text" :name="id" :id="id" class="bg-white rounded-[3px] px-3 py-2 grow focus:outline-none" :class="class_cs" autocomplete="false" :placeholder="placeholder"/>
        <div class="bg-stone-300 flex items-center px-3">
            <svg  xmlns="http://www.w3.org/2000/svg" class="font-semibold text-slate-800"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
        </div>
    </div>
</template>

<script lang="ts" setup>
interface PropsIF {
    id?: string;
    placeholder?: string | undefined;
    class_cs?: string | undefined;
}

const props: PropsIF = defineProps({
    id: { type: String, default: "id" },
    placeholder: {
        type: String,
        default: ""
    },
    class_cs: {
        type: String,
        default: "",
    },
});
</script>