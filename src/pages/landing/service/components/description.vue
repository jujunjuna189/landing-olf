<template>
    <div class="py-18 px-5">
        <div class="flex gap-18 items-center">
            <div class="border-t-2 w-16 border-secondary"></div>
            <span class="text-5xl font-semibold text-secondary">Our Service</span>
        </div>
        <div class="">
            <div class="py-7 pl-[7.5rem]">
                <p class="text-justify">At Ono Law Firm, we believe that a strong client relationship is the foundation of successful legal representation. We take the time to understand our clients' unique needs and goals, and we work closely with them to develop tailored legal strategies that achieve their desired outcomes. We are passionate about advocating for our clients' interests and protecting their rights.</p>
            </div>
        </div>
    </div>
    <div class="pt-4 pb-24 px-8">
        <div class="grid grid-cols-3 gap-6">
            <div v-for="(item, i) in services" :key="i">
                <div class="bg-stone-100 py-10 h-full text-center px-10">
                    <div class=" px-5">
                        <div class="flex justify-center">
                            <div class="bg-warning/50 text-primary rounded-full h-20 w-20 flex justify-center items-center">
                                <div v-html="item.icon" />
                            </div>
                        </div>
                        <p class="font-bold text-xl mt-5">{{ item.title }}</p>
                    </div>
                    <div class="px-5 text-black/80 mt-5" v-html="item.description"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const services = [
    {
        icon: `<svg  xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-gavel"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 10l7.383 7.418c.823 .82 .823 2.148 0 2.967a2.11 2.11 0 0 1 -2.976 0l-7.407 -7.385" /><path d="M6 9l4 4" /><path d="M13 10l-4 -4" /><path d="M3 21h7" /><path d="M6.793 15.793l-3.586 -3.586a1 1 0 0 1 0 -1.414l2.293 -2.293l.5 .5l3 -3l-.5 -.5l2.293 -2.293a1 1 0 0 1 1.414 0l3.586 3.586a1 1 0 0 1 0 1.414l-2.293 2.293l-.5 -.5l-3 3l.5 .5l-2.293 2.293a1 1 0 0 1 -1.414 0z" /></svg>`,
        title: 'LITIGATION & NON LITIGATION',
        description: 'Ono Law Firm has a partnership with certified and experienced tax consultants, providing services such as company audits, tax planning, restitution, and litigation, and furthermore, ONO Law Firm is also capable to handle non-litigation matters such as negotiations, document/ contract review, etc.'
    },
    {
        icon: `<svg  xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-file-text"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M9 9l1 0" /><path d="M9 13l6 0" /><path d="M9 17l6 0" /></svg>`,
        title: 'PERMIT AND LEGALITY',
        description: 'Ono Law Firm has a team of experienced lawyers with over 10 years of experience, handling corporate and personal legal cases, from alternative dispute resolution to court proceedings. <br /><br/>We are also familiar with corporate economic crimes without neglecting our expertise in personal and individual law. The lawyers at Ono Law Firm are certified and experienced, adhering to the Code of Conduct for Lawyers, ensuring our services are prompt and accurate.'
    },
    {
        icon: `<svg  xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-calculator"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 3m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M8 7m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" /><path d="M8 14l0 .01" /><path d="M12 14l0 .01" /><path d="M16 14l0 .01" /><path d="M8 17l0 .01" /><path d="M12 17l0 .01" /><path d="M16 17l0 .01" /></svg>`,
        title: 'TAX',
        description: 'Ono Law Firm has a partnership with certified and experienced tax consultants, providing services such as company audits, tax planning, restitution, and litigation.'
    },
    {
        icon: `<svg  xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-buildings"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 21v-15c0 -1 1 -2 2 -2h5c1 0 2 1 2 2v15" /><path d="M16 8h2c1 0 2 1 2 2v11" /><path d="M3 21h18" /><path d="M10 12v0" /><path d="M10 16v0" /><path d="M10 8v0" /><path d="M7 12v0" /><path d="M7 16v0" /><path d="M7 8v0" /><path d="M17 12v0" /><path d="M17 16v0" /></svg>`,
        title: 'LEGAL CORPORATE',
        description: 'Ono Law Firm has a legal team that can be a partner for your company, providing retainer services. You can enjoy the legal services you need, including reviewing partnership agreements, creating legal documents, and meeting legal human resource needs and legal education for employees.'
    },
    {
        icon: `<svg  xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-lamp"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 20h6" /><path d="M12 20v-8" /><path d="M5 12h14l-4 -8h-6z" /></svg>`,
        title: 'INTELLECTUAL PROPERTY',
        description: 'Ono Law Firm has a legal team handling intellectual property matters, including patents, industrial designs, trademarks, copyrights, intellectual property investigations, and intellectual property litigation. <br /><br/>Intellectual property is the heart of business and often the most valuable and important asset to be protected. Our law firm answers clients intellectual property needs.'
    },
];

</script>