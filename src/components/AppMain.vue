<script>
import { state } from "../assets/data/state";
import ServiceSection from "./ServiceSection.vue"
import NetworkSection from "./NetworkSection.vue"
import BannerSection from "./BannerSection.vue"

export default {
    name: 'AppMain',
    components: {
        ServiceSection,
        NetworkSection,
        BannerSection,
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
    </main>
</template>