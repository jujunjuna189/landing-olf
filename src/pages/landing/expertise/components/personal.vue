<template>
    <div class="py-5 px-5 mt-10 mb-20">
        <div class="flex gap-18 items-center justify-center">
            <div class="flex flex-col items-center">
                <div class="border-t-2 w-16 border-secondary"></div>
                <span class="text-5xl font-semibold text-secondary mt-8">Personal</span>
            </div>
        </div>
        <div class="mt-10 flex justify-center">
            <div class="flex flex-wrap justify-center gap-5">
                <div v-for="(item, i) in perosnals" :key="i">
                    <div class="w-64 bg-slate-100 aspect-square text-center flex justify-center items-center p-3">
                        <div>
                            <div class="flex justify-center">
                                <img :src="item.icon" :alt="item.title" class="w-30 h-30 grayscale brightness-200 contrast-50">
                            </div>
                            <p class="mt-3 font-bold">{{ item.title }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import asset from '../../../../assets/asset';


const perosnals = [
    {
        icon: asset.icFamilyLaw,
        title: 'FAMILY LAW',
    },
    {
        icon: asset.icHumanRights,
        title: 'HUMAN RIGHTS',
    },
    {
        icon: asset.icInheritance,
        title: 'INHERITANCE',
    },
    {
        icon: asset.icGuardianship,
        title: 'GUARDIANSHIP',
    },
    {
        icon: asset.icAuction,
        title: 'ETC,.',
    }, 
    
];

</script>