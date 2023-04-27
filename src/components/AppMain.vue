<script>
import { state } from "../assets/data/state";
import ServiceSection from "./ServiceSection.vue"

export default {
    name: 'AppMain',
    components: {
        ServiceSection,
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

    </main>
</template>