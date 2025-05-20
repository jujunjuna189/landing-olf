<template>
    <LandingLayout>
        <Description/>
        <Corporate/>
        <Personal/>
        <Suscribetion/>
    </LandingLayout>
</template>

<script setup lang="ts">
import LandingLayout from '../../../components/molecules/layout/landing-layout.vue';
import Description from './components/description.vue';
import Corporate from './components/corporate.vue';
import Personal from './components/personal.vue';
import Suscribetion from '../../../components/molecules/footer/suscribetion.vue';

</script>