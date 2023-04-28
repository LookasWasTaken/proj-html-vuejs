<script>
import { state } from '../assets/data/state';
import { network } from '../assets/data/network';

export default {
    name: 'NetworkSection',
    data() {
        return {
            state,
            network,
        }
    },
}
</script>

<template>
    <section id="network" class="d-flex">
        <div class="decoration up">
            <div v-for="n in 40"></div>
        </div>
        <div class="left">
            <h6>ABOUT THE NETWORK</h6>
            <h3>
                <span>The</span>
                Company
            </h3>
            <p>With all of this expertise and capability comes an unrivalled commitment to customer service.</p>
            <div class="skills">
                <div v-for="work in network" class="skill d-flex gap-3">
                    <div class="circle">
                        <span>[{{ work.percentage }}]</span>
                    </div>
                    <div class="info">
                        <h3>{{ work.type }}</h3>
                        <p>{{ work.text }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="right">
            <img class="img-fluid" src="../assets/img/about-5.jpg" alt="company image">
        </div>
        <div class="decoration down">
            <div v-for="n in 40"></div>
        </div>
    </section>
</template>