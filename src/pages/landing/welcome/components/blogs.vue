<template>
    <div class="py-10 lg:py-24 lg:pb-32">
        <div class="flex flex-col justify-center items-center">
            <div class="border-t-2 w-20 border-secondary"></div>
            <h3 class="text-xl lg:text-4xl text-slate-800 font-semibold mt-5 lg:mt-12">Recent Update</h3>
        </div>
        <div class="px-5 lg:px-14 lg:grid lg:grid-cols-4 lg:gap-7 mt-10 lg:mt-28">
            <div v-for="(item, i) in news" :key="i">
                <div class="relative border border-stone-200 mb-5 lg:mb-0">
                    <div class="bg-slate-300 aspect-[6/5] hover:-m-5 hover:shadow transition-all">
                        <img :src="item.thumbnail" :alt="clampText(item.title, 20)" class="w-full h-full object-cover">
                    </div>
                    <div class="flex flex-col leading-[18px] py-5 px-4 bg-stone-100">
                        <span class="font-semibold text-slate-700 text-xl">{{ clampText(item.title, 100) }}</span>
                        <a :href="item.link" target="_blank" class="flex gap-1 items-center mt-4 cursor-pointer" >
                            <div class="w-3 border-t-2 border-secondary"></div>
                            <span class="text-secondary font-medium">Read More</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { onMounted, reactive } from 'vue';

export interface NewsIF{
  thumbnail: string,
  title: string,
  link: string,
}

const news = reactive<NewsIF[]>([]);

const clampText = (text: string, maxChars: number): string => {
  if (text.length <= maxChars) return text;
  return text.slice(0, maxChars).trimEnd() + '...';
}

const onGetNews = () => {
  axios.get('https://api-berita-indonesia.vercel.app/antara/hukum').then((res) => {
    const raw = res.data.data.posts.slice(0, 4);
    Object.assign(news, raw);
  });
}

onMounted(() => {
  onGetNews();
});


</script>