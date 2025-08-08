<template>
    <div class="lg:col-span-2">
        <div class="bg-primary py-5 lg:px-3 rounded-sm">
            <div class="text-center">
                <h3 class="text-xl lg:text-4xl font-bold text-warning" v-html="getLang('contact_us_title4')"></h3>
                <div class="mt-3">
                    <span class="text-warning">{{ getLang('contact_us_sub_title1') }}</span>
                </div>
            </div>
            <div class="p-4 pt-2">
                <div class="bg-slate-200 p-4 rounded-sm">
                    <div class="">
                        <label for="name" class="text-sm text-slate-700 font-medium">{{ getLang('first_name') }}<span class="text-red-600">*</span></label>
                        <div class="w-full">
                            <TextField v-model="name" :placeholder="getLang('your_name')" />
                        </div>
                    </div>
                    <div class="mt-2">
                        <label for="name" class="text-sm text-slate-700 font-medium">{{ getLang('email_address') }}<span class="text-red-600">*</span></label>
                        <div class="w-full">
                            <TextField v-model="email" :placeholder="getLang('your_email')" />
                        </div>
                    </div>
                    <div class="mt-2">
                        <label for="name" class="text-sm text-slate-700 font-medium">{{ getLang('phone_number') }}</label>
                        <div class="w-full">
                            <TextField v-model="phone" placeholder="E.g. +62 8xx xxx xxx" />
                        </div>
                    </div>
                    <div class="mt-2">
                        <label for="name" class="text-sm text-slate-700 font-medium">{{ getLang('message') }}</label>
                        <div class="w-full">
                            <AreaField v-model="message" :placeholder="getLang('enter_your_message')" />
                        </div>
                    </div>
                    <div class="mt-5">
                        <Button :label="getLang('send_message')" class="!bg-primary text-warning" @click="sendWhatsApp"/>
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
import { ref } from 'vue';
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