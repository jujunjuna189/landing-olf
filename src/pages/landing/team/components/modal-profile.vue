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
              <span class="text-xl lg:text-3xl text-primary font-bold">{{ pocket.name }}</span><br />
              <small class="text-base">{{ pocket.position }}</small>
            </div>
          </div>
          <div v-on:click="toggleModal" class="cursor-pointer">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
          </div>
        </div>
        <div class="lg:grid lg:grid-cols-3 mt-5">
            <div class="col-span-1 w-full h-[20rem] bg-slate-200 relative">
                <div class="absolute lg:-right-16 bg-primary text-warning font-bold px-3 py-1 -top-3 lg:top-5">Overview</div>
                <img :src="pocket.image" :alt="pocket.name" class="w-full h-full object-cover">
            </div>
            <div class="col-span-2 px-5 py-[4rem]">
                <div class="text-slate-800" v-html="pocket.overview"></div>
                <div class="mt-5" v-if="pocket.experience">
                    <p class="text-primary font-semibold">HIGHLIGHTED EXPERIENCE</p>
                    <div class="w-7 h-1 border-t-2 border-primary"></div>
                    <div class="text-slate-800" v-html="pocket.experience"></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

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