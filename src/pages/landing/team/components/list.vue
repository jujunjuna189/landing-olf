<template>
    <div class="px-14 my-16">
            <div class="grid grid-cols-4 gap-7">
                <div v-for="item in 9" :key="item">
                    <div class="relative">
                        <div class="bg-slate-300 aspect-square hover:-m-5 hover:shadow transition-all"></div>
                        <div class="flex flex-col text-center leading-[18px] mt-5">
                            <span class="font-semibold text-slate-700">Full Name {{ item }}</span>
                            <span class="text-secondary font-medium text-sm">Digree {{ item }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>