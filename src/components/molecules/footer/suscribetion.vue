<template>
    <div class="py-24 bg-secondary">
        <div class="grid grid-cols-2">
            <div class="flex justify-center items-center gap-10">
                <div class="border-t-[2.5px] w-52 border-slate-800"></div>
                <span class="text-4xl font-medium text-slate-800">Our Newsletter</span>
            </div>
            <div>
                <EmailField id="email" placeholder="E.g. youremail@mail.com" class_cs="w-[20rem]"/>
                <div class="mt-3">
                    <Button label="Subscribe" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import EmailField from '../../atoms/field/email-field.vue';
import Button from '../../atoms/button/button.vue';
</script>