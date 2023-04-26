<script>
import { state } from "../assets/data/state";
import nexgenLogo from "../components/nexgenLogo.vue"

export default {
    name: 'JumboTron',
    components: {
        nexgenLogo,
    },
    data() {
        return {
            state
        }
    }
}
</script>

<template>
    <div class="jumbotron">
        <div class="overlay">
            <div class="container d-flex justify-content-between align-items-center py-5">
                <div class="left align-self-start">
                    <nexgenLogo></nexgenLogo>
                </div>
                <div class="right">
                    <div class="menu">
                        <ul class="list-unstyled d-flex justify-content-between align-items-center">
                            <li>HOME</li>
                            <li>SERVICES</li>
                            <li>SKILLS</li>
                            <li>PARTNERS</li>
                            <li>BLOG</li>
                            <li class="active">GET IN TOUCH</li>
                        </ul>
                    </div>
                    <div class="info d-flex flex-column gap-3 my-5">
                        <h1 class="my-3">
                            <div class="accent">Logistics
                                <div class="background"></div>
                            </div>
                             that goes further.</h1>
                        <p class="my-3">For 20 years working with the most innovative in the field of transport.</p>
                        <div class="buttons my-3 d-flex justify-content-between align-items-center">
                            <a class="btn btn-custom bg" href="#" role="button">GET IN TOUCH</a>
                            <a class="btn btn-custom" href="#" role="button">READ MORE</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>