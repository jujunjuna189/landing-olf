<template>
    <input type="email" :name="id" :id="id" class="bg-white rounded-[3px] px-3 py-3" :class="class_cs" autocomplete="false" :placeholder="placeholder"/>
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