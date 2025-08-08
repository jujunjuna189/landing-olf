<template>
  <!-- Language Selector -->
  <div class="relative">
    <!-- Button -->
    <button
      @click="open = !open"
      class="flex justify-between w-full items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md"
    >
      <span class="uppercase">{{ language }}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>

    <!-- Popup -->
    <transition name="fade">
      <div
        v-if="open"
        @click.outside="open = false"
        class="absolute right-0 left-0 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-50"
      >
        <ul class="py-2 text-sm">
          <li>
            <button
              @click="setLanguage('id')"
              class="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Indonesia
            </button>
          </li>
          <li>
            <button
              @click="setLanguage('en')"
              class="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              English
            </button>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";

const open = ref(false);
const language = ref(localStorage.getItem('appLanguage') ?? "en");

const setLanguage = (lang) => {
  language.value = lang;
  open.value = false;
  localStorage.setItem("appLanguage", lang);
  window.location.reload();
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
