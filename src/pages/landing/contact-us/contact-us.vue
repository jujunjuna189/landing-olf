<template>
    <LandingLayout>
        <div class="lg:grid lg:grid-cols-5 lg:gap-20 py-5 lg:py-24 lg:px-20 bg-slate-100">
            <Contact/>
            <Form />
        </div>
    </LandingLayout>
</template>

<script setup lang="ts">
import Contact from './components/contact.vue';
import Form from './components/form.vue';
import LandingLayout from '../../../components/molecules/layout/landing-layout.vue';
</script>