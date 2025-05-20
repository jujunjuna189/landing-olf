<template>
    <div class="py-18 px-5">
        <div class="flex gap-18 items-center">
            <div class="border-t-2 w-16 border-secondary"></div>
            <span class="text-5xl font-semibold text-secondary">About</span>
        </div>
        <div class="grid grid-cols-2">
            <div class="py-7 pl-[7.5rem]">
                <p class="text-justify">Ono Law Firm is a leading law firm in Jakarta, Indonesia, dedicated to providing Handling Various Legal Issues, Including Corporate, Personal, and Individual Matters, Ono and Associate Focuses on Business Law, Helping Companies Meet Their Legal Needs. exceptional legal services to businesses and individuals.</p>
                <p class="mt-2 text-justify">Founded in 2020, our team of experienced lawyers has a proven track record of success in a wide range of legal areas. We are committed to providing our clients with the highest quality legal representation and personalized attention to ensure their legal needs are met effectively and efficiently</p>
                <p class="mt-2 text-justify">Founded in 2020, our team of experienced lawyers has a proven track record of success in a wide range of legal areas. We are committed to providing our clients with the highest quality legal representation and personalized attention to ensure their legal needs are met effectively and efficiently</p>
            </div>
            <div class="py-7 pl-24 pr-10">
                <p class="text-justify">Ono Law Firm has been a trusted advisor and representative for various creative businesses and multinational companies, navigating their most challenging issues. Ono and Associate has a wide range of practice areas, including Dispute Resolution, Direct Investment, Corporate & Commercial, Intellectual Property, and Information Technology.</p>
                <p class="mt-2 text-justify">Ono Law Firm combines leading professionals and experienced teams, supported by experts in their fields, and has developed a network of partnerships with institutions and experts. Our team of experienced lawyers is committed to providing our clients with the highest quality legal representation. </p>
                <p class="mt-2 text-justify">Our lawyers are experts in their respective fields and have a deep understanding of the Indonesian legal system. We are also fluent in English and Indonesian, which allows us to communicate effectively with our clients from all over the world.</p>
                <p class="mt-2 text-justify">We are committed to providing our clients with exceptional legal services that exceed their expectations. We are dedicated to building long-lasting relationships with our clients and helping them achieve their legal and business goals. </p>
            </div>
        </div>
    </div>
    <div class="bg-slate-100 py-20 px-5">
        <div class="mx-auto flex flex-row items-center gap-8">
            <!-- Image -->
            <div class="w-1/3 flex justify-center mask-b-from-20% mask-b-to-95%">
                <img
                :src="asset.prsn1"
                alt="Jackson Tandiono"
                class="max-w-sm w-full object-contain"
                />
            </div>

            <!-- Text Content -->
            <div class="w-2/3 space-y-3">
                <div class="text-5xl text-orange-500">“</div>
                <p class="text-base leading-relaxed">
                As an entrepreneur I realize the importance of legal awareness.
                Legal/Law holds a big portion to secure any part of our life,
                whether it's personal or corporate matter.
                </p>
                <p class="text-base leading-relaxed">
                One important example of the law for companies is to regulate the company’s internal flow and to prevent the company from any legal scandals. Furthermore, in our everyday life law plays an important role so that every individual has limits in their actions and to protect the rights of each person.
                </p>
                <p class="text-base leading-relaxed">
                Therefore in 2021 I decided to open a law firm and form ONO LAW FIRM to be able to provide legal services that will make it easier for every party who becomes our client, be it individuals or companies.
                </p>
                <p class="text-base leading-relaxed">
                I have a great hopes that ONO LAW FIRM can carry out all its duties and functions well, and that in the future ONO LAW FIRM will continue to develop and be able to compete with other law firms.
                </p>

                <!-- Name and Title -->
                <div class="pt-4">
                <p class="font-semibold text-primary text-lg">Jackson Tandiono</p>
                <p class="text-sm text-slate-500">Managing Partner</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import asset from '../../../../assets/asset';

</script>