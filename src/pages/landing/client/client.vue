<template>
    <LandingLayout>
        <Description/>
        <List/>
        <Suscribetion/>
    </LandingLayout>
</template>

<script setup lang="ts">
import Suscribetion from '../../../components/molecules/footer/suscribetion.vue';
import LandingLayout from '../../../components/molecules/layout/landing-layout.vue';
import Description from './components/description.vue';
import List from './components/list.vue';
</script>