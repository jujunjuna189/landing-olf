<template>
    <div class="lg:col-span-2">
        <div class="bg-primary py-5 lg:px-3 rounded-sm">
            <div class="text-center">
                <h3 class="text-xl lg:text-4xl font-bold text-warning">ONO LAW FIRM <br /> CLIENT SUPPORT</h3>
                <div class="mt-3">
                    <span class="text-warning">Send US Message</span>
                </div>
            </div>
            <div class="p-4 pt-2">
                <div class="bg-slate-200 p-4 rounded-sm">
                    <div class="">
                        <label for="name" class="text-sm text-slate-700 font-medium">First Name<span class="text-red-600">*</span></label>
                        <div class="w-full">
                            <TextField placeholder="E.g. Your Name"/>
                        </div>
                    </div>
                    <div class="mt-2">
                        <label for="name" class="text-sm text-slate-700 font-medium">Email Address<span class="text-red-600">*</span></label>
                        <div class="w-full">
                            <TextField placeholder="E.g. youremail@email.com"/>
                        </div>
                    </div>
                    <div class="mt-2">
                        <label for="name" class="text-sm text-slate-700 font-medium">Phone Number</label>
                        <div class="w-full">
                            <TextField placeholder="E.g. +62 8xx xxx xxx"/>
                        </div>
                    </div>
                    <div class="mt-2">
                        <label for="name" class="text-sm text-slate-700 font-medium">Message</label>
                        <div class="w-full">
                            <AreaField placeholder="Enter your message..."/>
                        </div>
                    </div>
                    <div class="mt-5">
                        <Button label="Send Message" class="!bg-primary text-warning"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import TextField from '../../../../components/atoms/field/text-field.vue';
import AreaField from '../../../../components/atoms/field/area-field.vue';
import Button from '../../../../components/atoms/button/button.vue';
</script>