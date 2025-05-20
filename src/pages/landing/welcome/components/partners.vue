<template>
    <div class="py-24">
        <div class="flex gap-5 px-40">
            <div class="border-t-2 border-secondary w-20 h-6 mt-4 ml-10 mr-8"></div>
            <span class="text-4xl font-semibold text-secondary">Partners</span>
        </div>
        <div class="px-14 mt-10">
            <div class="grid grid-cols-4 gap-7">
                <div v-for="(item, i) in partners" :key="i">
                    <div class="relative">
                        <div class="bg-slate-300 aspect-square hover:-m-5 hover:shadow transition-all flex justify-center items-center">
                            <img :src="item.image" :alt="item.name" class="w-52 h-5w-52">
                        </div>
                        <div class="flex flex-col text-center leading-[18px] mt-5">
                            <span class="font-semibold text-slate-700">{{ item.name }}</span>
                            <span class="text-secondary font-medium text-sm">{{ item.position }}</span>
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

<script setup lang="ts">

const partners = [
  {
    name: "Hendra Saputra",
    position: "Chief Technology Officer",
    image: "https://avatar.iran.liara.run/public/22",
  },
  {
    name: "Nadya Pramesti",
    position: "Head of Business Development",
    image: "https://avatar.iran.liara.run/public/96",
  },
  {
    name: "Farhan Maulana",
    position: "Lead Software Engineer",
    image: "https://avatar.iran.liara.run/public/46",
  },
  {
    name: "Dewi Anggraini",
    position: "Strategic Partnership Manager",
    image: "https://avatar.iran.liara.run/public/98",
  },
  {
    name: "Rizal Fadillah",
    position: "Project Manager",
    image: "https://avatar.iran.liara.run/public/7",
  },
  {
    name: "Intan Ramadhani",
    position: "UI/UX Designer",
    image: "https://avatar.iran.liara.run/public/97",
  },
  {
    name: "Bayu Wirawan",
    position: "Cloud Solutions Architect",
    image: "https://avatar.iran.liara.run/public/8",
  },
  {
    name: "Siska Permata",
    position: "Marketing & Communications Lead",
    image: "https://avatar.iran.liara.run/public/93",
  },
  {
    name: "Ari Wibowo",
    position: "Data Analyst",
    image: "https://avatar.iran.liara.run/public/9",
  },
];


</script>