<template>
    <div class="antialiased">
        <Navbar />
        <FlyButton/>
        <slot></slot>
    </div>
    <Footer />
</template>

<script setup lang="ts">
import Navbar from "../navbar/navbar.vue";
import Footer from "../footer/footer.vue";
import FlyButton from "../button/fly-button.vue";
</script>