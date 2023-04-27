<script>
import { state } from "../assets/data/state";
import { info } from "../assets/data/info";
import { links } from "../assets/data/links"
import nexgenLogo from "./nexgenLogo.vue";
import CreditsSection from "./CreditsSection.vue";

export default {
    name: 'AppFooter',
    components: {
        nexgenLogo,
        CreditsSection,
    },
    data() {
        return {
            state,
            info,
            links,
        }
    }
}
</script>

<template>
    <footer>
        <section class="py-5">
            <div class="container">
                <div class="row row-cols-4">
                    <div class="col">
                        <div class="background card">
                            <nexgenLogo></nexgenLogo>
                            <h6 class="text-center pt-3 mb-0">A functional HTML Template for Corporate & Business</h6>
                            <div class="contacts d-flex flex-column gap-3 my-5">
                                <div class="d-flex align-items-center gap-2">
                                    <div class="d-flex justify-content-center align-items-center">
                                        <font-awesome-icon icon="fa-solid fa-phone" />
                                    </div>
                                    <div>{{ info.phone }}</div>
                                </div>
                                <div class="d-flex align-items-center gap-2">
                                    <div class="d-flex justify-content-center align-items-center">
                                        <font-awesome-icon icon="fa-solid fa-envelope" />
                                    </div>
                                    <div>{{ info.mail }}</div>
                                </div>
                                <div class="d-flex align-items-center gap-2">
                                    <div class="d-flex justify-content-center align-items-center">
                                        <font-awesome-icon icon="fa-solid fa-location-dot" />
                                    </div>
                                    <div>{{ info.location }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-for="item in links" class="col">
                        <div class="custom card h-100">
                            <h5 class="my-3">{{ item.title }}</h5>
                            <ul class="d-flex flex-column gap-4 list-unstyled">
                                <li v-for="link in item.links">
                                    <a :href="link.link">
                                        <span>
                                            <font-awesome-icon icon="fa-solid fa-angle-right" />
                                        </span>
                                        {{ link.name }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <CreditsSection></CreditsSection>
    </footer>
</template>