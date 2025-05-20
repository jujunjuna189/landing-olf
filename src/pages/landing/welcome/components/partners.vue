<template>
    <div class="py-24">
        <div class="flex gap-5 px-40">
            <div class="border-t-2 border-secondary w-20 h-6 mt-4 ml-10 mr-8"></div>
            <span class="text-4xl font-semibold text-secondary">Partners</span>
        </div>
        <div class="px-14 mt-10">
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
        <div class="px-10 text-center mt-10">
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</span>
        </div>
    </div>
</template>