<script>
import { social } from "../assets/data/social";
import { info } from "../assets/data/info";

export default {
    name: 'HeaderMenu',
    data() {
        return {
            social,
            info,
        }
    }
}
</script>

<template>
    <nav>
        <div class="container d-flex justify-content-between align-items-center py-3">
            <div class="open_hours d-flex gap-2">
                <span><font-awesome-icon icon="fa-regular fa-clock" shake /></span>
                <span>Open Hours: {{ info.days }} / {{ info.time }}</span>
            </div>
            <div class="generals d-flex gap-5 justify-content-between align-items-center">   
                <div class="number d-flex gap-2">
                    <span><font-awesome-icon icon="fa-solid fa-phone" /></span>
                    <span>{{ info.phone }}</span>
                </div>
                <div class="mail d-flex gap-2">
                    <span><font-awesome-icon icon="fa-solid fa-envelope" /></span>
                    <span>{{ info.mail }}</span>
                </div>
                <div class="social d-flex gap-4">
                    <span v-for="icon in social">
                        <a :href="icon.ref">
                            <font-awesome-icon :icon="icon.icon" />
                        </a>
                    </span>
                </div>
            </div>
        </div>
    </nav>
</template>