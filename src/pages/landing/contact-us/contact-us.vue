<template>
    <LandingLayout>
        <div class="grid grid-cols-5 gap-20 py-24 px-20 bg-slate-100">
            <Contact/>
            <Form />
        </div>
        <Suscribetion/>
    </LandingLayout>
</template>

<script setup lang="ts">
import Contact from './components/contact.vue';
import Form from './components/form.vue';
import Suscribetion from '../../../components/molecules/footer/suscribetion.vue';
import LandingLayout from '../../../components/molecules/layout/landing-layout.vue';
</script>