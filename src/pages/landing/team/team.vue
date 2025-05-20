<template>
    <LandingLayout>
        <Description/>
        <Filter/>
        <List/>
        <Suscribetion/>
    </LandingLayout>
</template>

<script setup lang="ts">
import LandingLayout from '../../../components/molecules/layout/landing-layout.vue';
import Description from './components/description.vue';
import Filter from './components/filter.vue';
import List from './components/list.vue';
import Suscribetion from '../../../components/molecules/footer/suscribetion.vue';

</script>