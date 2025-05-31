<template>
    <div class="grid grid-cols-5 bg-linear-to-r from-primary to-primary py-16 px-10" id="form">
        <div class="col-span-3 flex justify-center items-center">
            <div class="flex justify-center items-center">
                <div class="flex flex-col justify-center text-justify pl-20">
                    <h3 class="text-3xl font-bold text-warning">Consult Your Legal Problem with Confidence</h3>
                    <p class="text-white w-[70%] mt-5">Facing legal challenges can be overwhelming, but you don’t have to navigate them alone. Our expert team at Ono Law Firm is here to listen, understand your unique situation, and provide clear, practical advice tailored to your needs. Schedule a consultation today and take the first step toward resolving your legal issues with trusted guidance.</p>
                </div>
            </div>
        </div>
        <div class="col-span-2">
            <div class="py-5 px-3 rounded-sm">
                <div class="p-4 pt-2">
                    <div class="bg-slate-200 py-8 px-8 rounded-sm">
                        <div class="text-center mt-2">
                            <h3 class="text-4xl font-bold text-slate-700">Consult Your Problem</h3>
                            <div class="mt-3">
                                <span class="text-slate-700">Consult With Us</span>
                            </div>
                        </div>
                        <div class="mt-10">
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
                                <AreaField placeholder="Your Legal Problems..."/>
                            </div>
                        </div>
                        <div class="mt-5">
                            <Button label="Send Message" class="!bg-primary text-warning"/>
                        </div>
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