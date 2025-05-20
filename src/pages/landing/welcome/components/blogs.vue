<template>
    <div class="py-24 pb-32">
        <div class="flex flex-col justify-center items-center">
            <div class="border-t-2 w-20 border-secondary"></div>
            <h3 class="text-4xl text-slate-800 font-semibold mt-12">Recent Update</h3>
        </div>
        <div class="px-14 grid grid-cols-4 gap-7 mt-28">
            <div v-for="item in 4" :key="item">
                <div class="relative border border-stone-200">
                    <div class="bg-slate-300 aspect-[6/5] hover:-m-5 hover:shadow transition-all"></div>
                    <div class="flex flex-col leading-[18px] py-5 px-4 bg-stone-100">
                        <span class="font-semibold text-slate-700 text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                        <div class="flex gap-1 items-center mt-4">
                            <div class="w-3 border-t-2 border-secondary"></div>
                            <span class="text-secondary font-medium">Read More</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>