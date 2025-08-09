<template>
    <div class="lg:grid lg:grid-cols-5 bg-linear-to-r from-primary to-primary py-5 lg:py-16 px-5 lg:px-10" id="form">
        <div class="lg:col-span-3 lg:flex lg:justify-center lg:items-center">
            <div class="lg:flex lg:justify-center lg:items-center">
                <div class="lg:flex lg:flex-col lg:justify-center lg:pl-20">
                    <h3 class="text-xl lg:text-3xl font-bold text-warning">{{ getLang('main_title8') }}</h3>
                    <p class="text-white lg:w-[70%] mt-5 text-sm lg:text-base">
                        {{ getLang('main_paragraph7') }}
                    </p>
                </div>
            </div>
        </div>

        <div class="lg:col-span-2">
            <div class="py-5 lg:px-3 rounded-sm">
                <div class="lg:p-4 pt-2">
                    <div class="bg-slate-200 py-5 px-5 lg:py-8 lg:px-8 rounded-sm">
                        <div class="text-center mt-2">
                            <h3 class="lg:text-4xl font-bold text-slate-700">{{ getLang('main_title9') }}</h3>
                            <div class="mt-3">
                                <span class="text-slate-700 text-sm lg:text-base">{{ getLang('main_sub_title1') }}</span>
                            </div>
                        </div>

                        <div class="mt-5 lg:mt-10">
                            <label class="text-sm text-slate-700 font-medium">{{ getLang('first_name') }}<span class="text-red-600">*</span></label>
                            <TextField v-model="name" :placeholder="getLang('your_name')" />
                        </div>

                        <div class="mt-2">
                            <label class="text-sm text-slate-700 font-medium">{{ getLang('email_address') }}<span class="text-red-600">*</span></label>
                            <TextField v-model="email" :placeholder="getLang('your_email')" />
                        </div>

                        <div class="mt-2">
                            <label class="text-sm text-slate-700 font-medium">{{ getLang('phone_number') }}</label>
                            <TextField v-model="phone" placeholder="E.g. +62 8xx xxx xxx" />
                        </div>

                        <div class="mt-2">
                            <label class="text-sm text-slate-700 font-medium">{{ getLang('message') }}</label>
                            <AreaField v-model="message" :placeholder="getLang('your_legal_problems')" />
                        </div>

                        <div class="mt-5">
                            <Button :label="getLang('send_message')" class="!bg-primary text-warning" @click="sendWhatsApp"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TextField from '../../../../components/atoms/field/text-field.vue';
import AreaField from '../../../../components/atoms/field/area-field.vue';
import Button from '../../../../components/atoms/button/button.vue';
import { getLang } from '../../../../helper/language/language';

const name = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')

const sendWhatsApp = () => {
    console.log(name.value);
    const baseUrl = "https://wa.me/6281316577152"
    const text = `Halo, Admin. Saya ${name.value} ingin berkonsultasi.\nEmail: ${email.value}\nPhone: ${phone.value}\nPesan: ${message.value}`
    const url = `${baseUrl}?text=${encodeURIComponent(text)}`
    window.open(url, "_blank")
}
</script>
