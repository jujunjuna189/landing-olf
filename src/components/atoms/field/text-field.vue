<template>
  <input
    :name="id"
    :id="id"
    class="bg-white w-full rounded-[3px] px-3 py-3"
    :class="class_cs"
    autocomplete="off"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>

<script lang="ts" setup>
interface PropsIF {
  id?: string
  placeholder?: string
  class_cs?: string
  modelValue?: string
}

const props = withDefaults(defineProps<PropsIF>(), {
  id: "id",
  placeholder: "",
  class_cs: "",
  modelValue: "",
})

const emit = defineEmits(["update:modelValue"])
</script>
