<template>
    <button class="bg-slate-700 text-slate-100 text-center rounded-sm py-3 px-8 font-medium cursor-pointer" :class="class_cs">{{label}}</button>
</template>

<script lang="ts" setup>
interface PropsIF {
    label?: string;
    class_cs?: string;
}

const props: PropsIF = defineProps({
    label: { type: String, default: "Button" },
    class_cs: {
        type: String, 
        default: ""
    },
});
</script>