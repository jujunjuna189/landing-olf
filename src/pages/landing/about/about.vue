<template>
    <LandingLayout>
        <Description/>
        <Clients/>
    </LandingLayout>
</template>

<script setup lang="ts">
import LandingLayout from '../../../components/molecules/layout/landing-layout.vue';
import Description from './components/description.vue';
import Clients from './components/clients.vue';
</script>