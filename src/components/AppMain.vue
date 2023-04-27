<script>
import { state } from "../assets/data/state";
import ServiceSection from "./ServiceSection.vue"
import NetworkSection from "./NetworkSection.vue"
import BannerSection from "./BannerSection.vue"
import NewsSection from "./NewsSection.vue"
import LetterSection from "./LetterSection.vue"

export default {
    name: 'AppMain',
    components: {
        ServiceSection,
        NetworkSection,
        BannerSection,
        NewsSection,
        LetterSection,
    },
    data() {
        return {
            state
        }
    }
}
</script>

<template>
    <main>
        <ServiceSection></ServiceSection>
        <NetworkSection></NetworkSection>
        <BannerSection></BannerSection>
        <NewsSection></NewsSection>
        <LetterSection></LetterSection>
    </main>
</template>