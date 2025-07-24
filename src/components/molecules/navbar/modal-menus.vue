<template>
    <div ref="modalRef">
    <div class="cursor-pointer" @click="toggleModal">
        <slot></slot>
    </div>

    <div class="fixed top-0 left-0 w-full h-full flex justify-center items-center z-10 transition-opacity duration-300 overflow-y-hidden" :class="{ 'opacity-100': isVisible, 'opacity-0 pointer-events-none': !isVisible }">
        <div class="fixed w-full h-full bg-dark-dark/75" @click="toggleModal"></div>

        <div class="relative p-5 lg:mt-10 lg:mb-10 border border-white shadow-all rounded-lg bg-white w-[50rem] z-20 shadow-all transform transition-transform duration-300 h-full lg:h-auto lg:max-h-[85vh] overflow-y-auto" :class="{ 'translate-y-0': isVisible, '-translate-y-10': !isVisible }">
            <div class="flex justify-between">
            <div class="grow">
                <div class="leading-3">
                <span class="text-xl lg:text-3xl text-primary font-bold">Menus</span><br />
                </div>
            </div>
            <div v-on:click="toggleModal" class="cursor-pointer">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
            </div>
        </div>
        <div class="mt-10">
            <ul class="list-none flex flex-col gap-5">
                <router-link v-for="(item, i) in menuData" :key="`menu-${i}`" :to="item.path"
                    class="hover:text-primary transition-all font-semibold uppercase" :class="[
                        $route.path === item.path ? 'text-primary font-bold' : 'text-secondary'
                    ]" active-class="text-primary font-semibold uppercase"
                    exact-active-class="text-primary font-semibold uppercase">
                    <li>{{ item.name }}</li>
                </router-link>
            </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import menu from "./navbar.interface.ts";

const menuData = menu;

const props = defineProps<{ pocket: any }>()

const isVisible = ref<boolean>(false)

const modalRef = ref<HTMLElement | null>(null)

const toggleModal = (): void => {
  isVisible.value = !isVisible.value
}

const handleClickOutside = (event: MouseEvent): void => {
  if (modalRef.value && !modalRef.value.contains(event.target as Node)) {
    isVisible.value = false
  }
}

onMounted(() => document.addEventListener('mousedown', handleClickOutside))
onBeforeUnmount(() => document.removeEventListener('mousedown', handleClickOutside))
</script>