<template>
    <div class="px-14 lg:my-8">
        <h2 class="text-2xl lg:text-4xl font-semibold text-secondary lg:mt-8 text-center">Managing Partner</h2>
        <div class="flex flex-wrap gap-7 justify-center mt-5">
            <div v-for="(item, i) in managingPartner" :key="i" class="max-w-[18rem]">
                <ModalProfile :pocket="item">
                    <div class="relative">
                        <div class="bg-slate-300 aspect-square hover:-m-5 hover:shadow transition-all">
                            <img :src="item.image" :alt="item.name" class="w-full h-full object-cover">
                        </div>
                        <div class="flex flex-col text-center leading-[18px] mt-5">
                            <span class="font-semibold text-slate-700">{{ item.name }}</span>
                            <span class="text-secondary font-medium text-sm">{{ item.position }}</span>
                        </div>
                    </div>
                </ModalProfile>
            </div>
        </div>
    </div>
    <div class="px-14 my-8">
        <h2 class="text-2xl lg:text-4xl font-semibold text-secondary mt-8 text-center">Advisor</h2>
        <div class="flex flex-wrap gap-7 justify-center mt-5">
            <div v-for="(item, i) in team" :key="i" class="max-w-[18rem]">
                <ModalProfile :pocket="item">
                    <div class="relative">
                        <div class="bg-slate-300 aspect-square hover:-m-5 hover:shadow transition-all">
                            <img :src="item.image" :alt="item.name" class="w-full h-full object-cover">
                        </div>
                        <div class="flex flex-col text-center leading-[18px] mt-5">
                            <span class="font-semibold text-slate-700">{{ item.name }}</span>
                            <span class="text-secondary font-medium text-sm">{{ item.position }}</span>
                        </div>
                    </div>
                </ModalProfile>
            </div>
        </div>
    </div>
    <hr class="border-t border-stone-200"/>
    <div class="px-14 my-8">
        <h2 class="text-2xl lg:text-4xl font-semibold text-secondary mt-8 text-center">Senior Partner</h2>
        <div class="flex flex-wrap gap-7 justify-center mt-5">
            <div v-for="(item, i) in seniorPartner" :key="i" class="max-w-[18rem]">
                <ModalProfile :pocket="item">
                    <div class="relative">
                        <div class="bg-slate-300 aspect-square hover:-m-5 hover:shadow transition-all">
                            <img :src="item.image" :alt="item.name" class="w-full h-full object-cover">
                        </div>
                        <div class="flex flex-col text-center leading-[18px] mt-5">
                            <span class="font-semibold text-slate-700">{{ item.name }}</span>
                            <span class="text-secondary font-medium text-sm">{{ item.position }}</span>
                        </div>
                    </div>
                </ModalProfile>
            </div>
        </div>
    </div>
    <div class="px-14 my-8">
        <h2 class="text-2xl lg:text-4xl font-semibold text-secondary mt-8 text-center">Partner</h2>
        <div class="flex flex-wrap gap-7 justify-center mt-5">
            <div v-for="(item, i) in partner" :key="i" class="max-w-[18rem]">
                <ModalProfile :pocket="item">
                    <div class="relative">
                        <div class="bg-slate-300 aspect-square hover:-m-5 hover:shadow transition-all">
                            <img :src="item.image" :alt="item.name" class="w-full h-full object-cover">
                        </div>
                        <div class="flex flex-col text-center leading-[18px] mt-5">
                            <span class="font-semibold text-slate-700">{{ item.name }}</span>
                            <span class="text-secondary font-medium text-sm">{{ item.position }}</span>
                        </div>
                    </div>
                </ModalProfile>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import asset from '../../../../assets/asset';
import ModalProfile from './modal-profile.vue';

const managingPartner = [
    {
    name: "KP JAKSON TANDIONO WIRYONAGORO, BSa., S.H",
    position: "Managing Partner",
    image: asset.prsnProfile2,
    overview: `
        <ul class="list-disc pl-5 space-y-1">
            <li><b>Managing Partner</b> of Ono Law Firm since 2020</li>
            <li><b>Head and/or member of several companies</b> in Indonesia that operate in renewable technology</li>
            <li>A <b>Business Administration Finance</b> graduate from University of Southern California, Los Angeles</li>
            <li><b>Dean’s List award holder</b> from Santa Monica College for two consecutive years (Fall 1994 and Spring 1995)</li>
        </ul>
    `,
  },
];

const team = [
  {
    name: "Dr. (H.C) dr. H. R. Agung Laksono",
    position: "Council",
    image: asset.prsnProfile1,
    overview: `
        <ul class="list-disc pl-5 space-y-1">
            <li>Member of the <b>Presidential Advisory Council</b> (2019 - now)</li>
            <li><b>Coordinating Minister for People’s Welfare</b> (2009–2014)</li>
            <li><b>Speaker of the People’s Representative</b> from Southeast Sulawesi</li>
            <li>Acting Minister of Youth and Sports in <b>Kabinet Reformasi Pembangunan</b> (1998–1999)</li>
        </ul>
    `,
  },
  {
    name: "Kevin Sofjan, S.H., ACI.ARB., C.L.I., C.P.L., C.P.L.E",
    position: "Advisor",
    image: asset.prsnProfile3,
    overview: `
        <p>Kevin Sofjan is a Managing Partner at ONO & Associate Law 
        Firm. He is an experienced lawyer specializing in arbitration, 
        commercial litigation, and dispute resolution. With various 
        professional certifications in the legal field, Kevin is known as 
        a reliable expert in handling complex legal cases.</p>
        <br/>
        <p>Kevin Sofjan is a distinguished lawyer based in Jakarta, Indo￾nesia, renowned for his extensive expertise in various areas of 
        law and his active involvement in numerous legal organiza￾tions. With a career marked by significant achievements and 
        recognitions, he has established himself as a leading figure in 
        the legal field.</p>
    `,
    experience: `
        <p>Kevin Sofjan has garnered extensive experience in 
        legal practice, particularly in arbitration and 
        dispute resolution. His proficiency in handling com￾plex legal matters has earned him a reputation for 
        excellence and reliability.</p>
        <br/>
        <p>His role in significant cases and his ability to 
        navigate intricate legal challenges underscore his 
        standing as a proficient legal professional.</p>
    `,
  },
];

const seniorPartner = [
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
];

const partner = [
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