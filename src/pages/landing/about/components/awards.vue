<template>
    <div class="flex flex-col justify-center items-center mt-24">
        <h3 class="text-5xl text-secondary font-semibold">Awards</h3>
    </div>
    <div class="grid grid-cols-9 mt-28 pb-28 gap-3 mx-20">
        <div v-for="(item, i) in awards" :key="i">
            <div class="aspect-square bg-slate-50 flex justify-center items-center p-3">
                <img :src="item.logo" alt="logo" class="">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import asset from '../../../../assets/asset';


const awards = [
  { logo: asset.lg1 },
  { logo: asset.lg2 },
  { logo: asset.lg3 },
  { logo: asset.lg4 },
  { logo: asset.lg5 },
  { logo: asset.lg6 },
  { logo: asset.lg7 },
  { logo: asset.lg8 },
  { logo: asset.lg9 },
  { logo: asset.lg4 },
  { logo: asset.lg6 },
  { logo: asset.lg7 },
  { logo: asset.lg8 },
  { logo: asset.lg9 },
  { logo: asset.lg1 },
  { logo: asset.lg2 },
  { logo: asset.lg3 },
  { logo: asset.lg4 },
  { logo: asset.lg5 },
  { logo: asset.lg4 },
  { logo: asset.lg1 },
  { logo: asset.lg2 },
  { logo: asset.lg3 },
  { logo: asset.lg4 },
  { logo: asset.lg5 },
  { logo: asset.lg6 },
  { logo: asset.lg7 },
]


</script>