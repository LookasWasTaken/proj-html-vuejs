<script>
import { state } from "../assets/data/state";
import ServiceSection from "./ServiceSection.vue"
import NetworkSection from "./NetworkSection.vue"

export default {
    name: 'AppMain',
    components: {
        ServiceSection,
        NetworkSection,
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
    </main>
</template>