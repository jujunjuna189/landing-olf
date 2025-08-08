<template>
    <div class="py-10 lg:py-24">
        <div class="flex gap-5 lg:px-40 justify-center">
            <div class="border-t-2 border-secondary w-20 h-6 mt-4 ml-10 mr-8"></div>
            <span class="text-xl lg:text-4xl font-semibold text-secondary">{{ getLang('main_title4') }}</span>
            <div class="border-t-2 border-secondary w-20 h-6 mt-4 ml-10 mr-8"></div>
        </div>
        <div class="px-14 mt-5 lg:mt-10">
            <div class="flex flex-wrap gap-7 justify-center">
                <div v-for="(item, i) in partner" :key="i" class="max-w-[18rem]">
                    <div class="relative">
                        <div class="bg-slate-300 aspect-square hover:-m-5 hover:shadow transition-all">
                            <img :src="item.image" :alt="item.name" class="w-full h-full object-cover">
                        </div>
                        <div class="flex flex-col text-center leading-[18px] mt-5">
                            <span class="font-semibold text-slate-700">{{ item.name }}</span>
                            <span class="text-secondary font-medium text-sm">{{ item.position }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="px-5 lg:px-10 text-center mt-10">
            <span class="text-sm lg:text-base">{{ getLang('main_paragraph3') }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import asset from '../../../../assets/asset';
import { getLang } from '../../../../helper/language/language';

const partner = [
    {
        name: "Santo Vans Jeffri Sinaga, S.H",
        position: "Senior Partner",
        image: asset.prsnProfile6,
        overview: `
            <p><b>Santo Vans Jeffri Sinaga</b> is a Partner at ONO Law Firm, 
            Specialist of Litigation.</p>
            <br/>
            <p>He is a dedicated Indonesian lawyer known for his expertise in 
            legal consulting and advocacy. He has a strong background in 
            providing legal services across various domains.</p>
        `,
        experience: `
            <p>Jeffri has accumulated significant experience through his involvement 
            in numerous legal cases and his work with several reputable law firms. 
            His practical approach to legal issues has earned him respect in the 
            legal community. </p>
            <br/>
            <p>In addition to his legal practice, Jeffri serves as legal advisor for a 
            prominent cosmetic brand and actively assists with legal matters in 
            the creative industry, including brand management and national 
            music events. He also practices in the field of constitutional law at the 
            Constitutional Court and is actively involved in providing legal aid.</p>
        `,
    },
    {
        name: "Hasbullah Alimuddin Hakim, S.H., M.H., C.P.L.E",
        position: "Senior Partner",
        image: asset.prsnProfile4,
        overview: `
            <p><b>Hasbullah Alimuddin Hakim</b> is a Partner at ONO Law Firm, 
            specialist of litigation.</p>
            <br/>
            <p>He is a prominent Indonesian lawyer known for his extensive 
            expertise in legal practice and his significant contributions to 
            legal education and discourse.</p>
        `,
        experience: `
            <p>Hasbullah has a robust background in handling complex 
            legal cases, particularly in criminal law and human rights.</p>
            <br/>
            <p>His career is marked by numerous successful 
            representations and a strong commitment to justice and 
            legal integrity.</p>
        `,
    },
    {
    name: "Widya Radiaty Elfa, S.H., M.Kn",
    position: "NOTARY",
    image: asset.prsnProfile5,
    overview: `
        <p><b>Widya Radiaty Elfa</b> is a Partner at ONO Law Firm, 
        specialist of legality. She is a distinguished legal 
        professional with extensive expertise in various areas of 
        Indonesian law.</p>
        <br/>
        <p>She serves as a prominent lawyer and notary, providing 
        legal services and consultation to individuals and 
        businesses.</p>
    `,
    experience: `
        <p>Widya Radiaty Elfa has garnered significant experience 
        throughout her career, with a particular focus on property 
        law, commercial transactions, and corporate law.</p>
        <br/>
        <p>Her background includes roles in prestigious law firms 
        and involvement in notable legal cases and transactions 
        that have helped shape her reputation as a reliable legal 
        advisor.</p>
    `,
  },
  {
    name: "Astria Dewi, S.E",
    position: "TAX",
    image: asset.prsnProfile10,
    overview: `
        <p>Astria Dewi is an excellent accounting graduate with a good 
        knowledge about taxes and understands the regulations related to 
        taxations.</p>
        <br/>
        <p>She has a solid legal taxes foundations and a passion in its field, and 
        she channels it into her areas of practice.</p>
    `,
    experience: `
        <p>Astria Dewi has an extensive experience regarding taxes 
        fields, she has been a members of several financial based 
        training that is recognized in Indonesia.</p>
        <br/>
        <p>Have been a member of Nipress Group since 2013, She has 
        been handling corporate’s finances and taxes for several 
        years and she is very good at her job.</p>
    `,
  },
  {
    name: "Yusuf Woro Widhi Firmanto, S.H",
    position: "Legal Corporate",
    image: asset.prsnProfile9,
    overview: `
        <p>A dedicated and highly skilled Law graduate from Universitas 
        Brawijaya, with 5 years of professional experience in diverse legal 
        roles. Specializing in areas such as Legal Research, Legal Consulting, 
        Mining Legal Consultancy, Land Law, and Human Resources, this 
        individual has developed a strong reputation for integrity, leadership, 
        and a quick learning ability.</p>
        <br/>
        <p>With expertise in legal drafting, compliance, and providing legal 
        advice, they have contributed significantly to corporate legal 
        functions and community legal support.</p>
    `,
    experience: `
        <p><b>Corporate Secretary & Legal Specialist (Feb 2024 – Present)</b>
        Represent company in legal matters, ensuring regulatory 
        compliance. Provide legal advice on corporate activities, 
        specializing in contract drafting, review, and managing licensing.</p>
        <br/>
        <p><b>Legal Officer (Jan 2022 – Feb 2024)</b>
        Drafted and reviewed contracts, conducted legal analysis, and 
        ensured compliance with relevant regulations for company 
        operations.</p>
        <br/>
        <p><b>Associate (Feb 2020 – Jun 2023)</b>
        Handled land ownership disputes, conducted land due diligence, 
        and provided legal consulting for mining projects.</p>
        <br/>
        <p><b>Junior Associate (May 2019 – Jan 2020)</b>
        Assisted in community-based legal projects, including land 
        permits, environmental law, and construction permits.</p>
    `,
  },
];


</script>