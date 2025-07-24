<script setup lang="ts">
import asset from '../../../../assets/asset';

</script>

<template>
    <div class="lg:pt-28 lg:pb-28 border-t-2 border-secondary">
        <div class="lg:grid lg:grid-cols-5">
            <div class=""></div>
            <div class="lg:flex lg:gap-10 leading-3 lg:col-span-4 lg:pr-24">
                <div class="border-t-2 border-secondary lg:w-14 lg:min-w-14 lg:max-w-14 h-2 mt-8"></div>
                <div class="px-5 lg:px-0 py-5 lg:py-0">
                    <span class="lowercase text-base lg:text-2xl font-medium">Since 2020, Ono Law Firm in Jakarta has been providing high-quality, personalized legal services to businesses and individuals, with a strong commitment to client relationships and successful outcomes.</span>
                    <div class="leading-6">
                        <p class="mt-4 text-slate-700 text-justify text-sm lg:text-base">Ono Law Firm is a leading law firm based in Jakarta, Indonesia, dedicated to delivering exceptional legal services to both businesses and individuals. Founded in 2020, our team of experienced lawyers has built a strong track record of success across diverse legal areas. We prioritize personalized attention and tailored legal strategies to effectively address our clients' unique needs and goals.</p>
                        <p class="text-slate-700 text-justify text-sm lg:text-base">At Ono Law Firm, we believe that strong client relationships form the foundation of effective legal representation. We work closely with our clients to understand their objectives and provide clear, strategic guidance every step of the way. Our commitment is to protect our clients’ rights and help them achieve the best possible outcomes through dedicated advocacy and expert legal counsel.</p>
                    </div>
                    <div class="flex">
                        <a :href="asset.fileProfile" :download="asset.fileProfile" class="flex bg-opacity-50 mt-5 mx-auto md:mx-0 rounded-[3px] py-2 cursor-pointer px-6 text-xs md:text-base lg:text-xs xl:text-base border-2 border-secondary hover:border-[#FFC8AA] transition duration-1000 ease-out">
                            Download Our Portofolio
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>