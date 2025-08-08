<template>
    <div class="lg:mt-10 pb-28 flex justify-center">
            <div class="lg:flex lg:flex-wrap lg:justify-center gap-5 px-5 lg:px-0">
                <div v-for="(item, i) in companies" class="w-[100%] lg:w-64 bg-slate-100 lg:aspect-video flex flex-col justify-center items-center text-center px-3 font-semibold text-slate-700 text-sm lg:text-base py-5 lg:py-3 my-2 lg:my-0">
                    <div class="flex items-center justify-center">
                        <img :src="item.logo" alt="logo" class="object-contain h-24" v-if="item.logo">
                        <!-- <div v-if="!item.logo" class="bg-slate-200 aspect-square h-24"></div> -->
                    </div>
                    {{ item.name }}
                </div>
            </div>
        </div>
</template>

<script setup lang="ts">
import asset from '../../../../assets/asset';

const companies = [
  { name: "PT Nipress, Tbk", logo: asset.logNipress  },
  { name: "PT Sky Energy Indonesia", logo: asset.logSky },
  { name: "PT Global Karya Bangsa", logo: asset.logGkb },
  { name: "PT Tritunggal Nusantara Timur", logo: asset.logTnt },
  { name: "PT Trinitan Plastics Industries", logo: asset.logTrinitan },
  { name: "PT Daya Mandiri Terbarukan", logo: asset.logDmt },
  { name: "PT Solusi Surya Sistema"  },
  { name: "PT Matra Mandiri Prima", logo: asset.logMmp },
  { name: "PT Tripilar Bumi Lestari" },
  { name: "PT Sukses Sumber Sejahtera" },
  { name: "PT Bumi Harmoni Indonesia", logo: asset.logIb },
  { name: "PT Indotech Consultant Hexa" },
  { name: "PT Trikora Cipta Jaya", logo: asset.log1 },
  { name: "PT Jasmanindo Sapta Perkasa" },
  { name: "PT Noval Indo Pratama" },
  { name: "PT Abadi Daya Manunggal" },
  { name: "West Natuna Exploration LTD. Jakarta" },
  { name: "PT Rocket Jaya Cemerlang" },
  { name: "PT Widia Persada" },
  { name: "PT Triasta Putra Santika" },
  { name: "PT Tiara Angkasa" },
  { name: "The Minister of Youth and Sport Affairs of Republic of Indonesia – Dr. (H.C.) H. Imam Nachrawi, S.Ag., M.KP." },
  { name: "Regent of Jayapura Regency – Mathius Awoitauw" },
  { name: "Governor and Deputy Governor of Lampung – Arinal and Nunik" },
  { name: "Regent of East Lampung – Chusnunia Chalim" },
  { name: "Regent of Buton – Samsu Umar Abdul Samium" }
];
</script>