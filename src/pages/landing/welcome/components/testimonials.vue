<template>
    <div class="py-5 px-5 lg:px-0 lg:py-24 bg-stone-100">
        <div class="flex flex-col justify-center items-center">
            <div class="border-t-2 w-14 border-secondary"></div>
            <h3 class="text-xl lg:text-4xl text-secondary font-semibold mt-5 lg:mt-12">{{ getLang('main_title2') }}</h3>
        </div>
        <div class="lg:px-28 lg:py-24">
            <Carousel v-bind="carouselConfig">
                <Slide v-for="(item, i) in logos" :key="i">
                    <div class="carousel__item w-72 h-30 flex justify-center items-center">
                        <img :src="item.logo" alt="logo" class="object-contain">
                    </div>
                </Slide>
            </Carousel>
        </div>
        <div class="flex flex-col justify-center items-center lg:mt-10">
            <h3 class="text-xl lg:text-4xl text-secondary font-semibold">{{ getLang('main_title3') }}</h3>
        </div>
        <div class="lg:px-28 lg:py-10">
            <Carousel v-bind="carouselConfigV2">
                <Slide v-for="(item, i) in testimonials" :key="i">
                    <div class="carousel__item w-[100%] min-h-52 flex flex-col justify-center items-center lg:px-28 text-center">
                        <p class="text-sm lg:text-xl font-medium">"{{ item.message }}"</p>
                        <div class="mt-8 text-slate-800 text-center text-sm lg:text-base">
                            <p>{{ item.name }}</p>
                            <p>{{ item.company }}</p>
                        </div>
                    </div>
                </Slide>
            </Carousel>
        </div>
    </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
import asset from '../../../../assets/asset';
import { getLang } from '../../../../helper/language/language';

const carouselConfig = {
    itemsToShow: 5,
    itemsToScroll: 5,
    wrapAround: true,
    autoplay: 3000,
    transition: 5000,
    gap: 0,
}

const carouselConfigV2 = {
    itemsToShow: 1,
    wrapAround: true,
    autoplay: 4000,
    transition: 1000,
    gap: 0,
}

const logos = [
  { logo: asset.logNipress },
  { logo: asset.logSky },
  { logo: asset.log1 },
  { logo: asset.logDmt },
  { logo: asset.logGkb },
  { logo: asset.logIb },
  { logo: asset.logMmp },
  { logo: asset.logTnt },
  { logo: asset.logTrinitan },
];

const testimonials = [
  {
    message:
      "Kami sempat ragu di awal, tapi setelah bekerja sama selama beberapa bulan, kami benar-benar merasa puas. Tim mereka tidak hanya cepat tanggap, tapi juga memberikan masukan yang sangat berguna untuk pengembangan sistem internal kami. Proses komunikasi juga berjalan lancar dan transparan.",
    name: "Rizky Ananda",
    company: "PT Solusi Digital Nusantara",
  },
  {
    message:
      "Pelayanan yang kami terima sangat profesional sejak hari pertama. Mereka benar-benar memahami kebutuhan bisnis kami dan mampu menerjemahkannya ke dalam solusi teknologi yang efisien. Bahkan ketika kami mengalami kendala, tim support mereka langsung turun tangan tanpa menunda.",
    name: "Maya Putri",
    company: "CV Karya Mandiri",
  },
  {
    message:
      "Saya pribadi sangat terkesan dengan dedikasi dan komitmen tim ini. Mereka tidak hanya menyelesaikan project tepat waktu, tapi juga memberikan nilai tambah dengan fitur-fitur yang tidak kami pikirkan sebelumnya. Ini sangat membantu operasional harian kami menjadi lebih efisien.",
    name: "Andi Firmansyah",
    company: "Technohub Indonesia",
  },
  {
    message:
      "Hasil kerja mereka jauh di atas ekspektasi kami. Mulai dari perencanaan, desain, hingga implementasi, semuanya dilakukan dengan teliti dan penuh perhatian. Terima kasih atas kerjasama yang luar biasa ini, semoga bisa terus berlanjut ke project-project berikutnya.",
    name: "Lilis Kartika",
    company: "Bintang Retail Group",
  },
];


</script>