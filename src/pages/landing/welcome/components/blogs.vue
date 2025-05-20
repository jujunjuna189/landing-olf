<template>
    <div class="py-24 pb-32">
        <div class="flex flex-col justify-center items-center">
            <div class="border-t-2 w-20 border-secondary"></div>
            <h3 class="text-4xl text-slate-800 font-semibold mt-12">Recent Update</h3>
        </div>
        <div class="px-14 grid grid-cols-4 gap-7 mt-28">
            <div v-for="(item, i) in news" :key="i">
                <div class="relative border border-stone-200">
                    <div class="bg-slate-300 aspect-[6/5] hover:-m-5 hover:shadow transition-all">
                        <img :src="item.image" :alt="clampText(item.title, 20)" class="w-full h-full object-cover">
                    </div>
                    <div class="flex flex-col leading-[18px] py-5 px-4 bg-stone-100">
                        <span class="font-semibold text-slate-700 text-xl">{{ clampText(item.title, 100) }}</span>
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

<script setup lang="ts">

const news = [
  {
    title: "Pemerintah Resmi Mengesahkan Undang-Undang Perlindungan Data Pribadi untuk Menjamin Keamanan Informasi Digital",
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Mahkamah Konstitusi Menolak Gugatan Terkait Revisi UU Pemilu yang Dianggap Menghambat Proses Demokrasi",
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Komisi Yudisial Menyoroti Pentingnya Transparansi dalam Penanganan Kasus Korupsi oleh Lembaga Peradilan",
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Diskusi Akademik Mengungkap Dampak Hukum Siber terhadap Kebebasan Berekspresi di Era Digital",
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const clampText = (text: string, maxChars: number): string => {
  if (text.length <= maxChars) return text;
  return text.slice(0, maxChars).trimEnd() + '...';
}


</script>