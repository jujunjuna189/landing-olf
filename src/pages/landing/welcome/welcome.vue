<template>
    <LandingLayout>
        <Hero/>
        <Trusted/>
        <Testimonials/>
        <Partners/>
        <Services/>
        <Blogs/>
        <Description/>
        <Form/>
        <Suscribetion/>
    </LandingLayout>
</template>

<script setup lang="ts">
import LandingLayout from "../../../components/molecules/layout/landing-layout.vue";
import Hero from "./components/hero.vue";
import Trusted from "./components/trusted.vue";
import Testimonials from "./components/testimonials.vue";
import Partners from "./components/partners.vue";
import Services from "./components/services.vue";
import Blogs from "./components/blogs.vue";
import Description from "./components/description.vue";
import Suscribetion from "../../../components/molecules/footer/suscribetion.vue";
import Form from "./components/form.vue";
</script>