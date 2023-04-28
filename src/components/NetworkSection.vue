<script>
import { network } from '../assets/data/network';

export default {
    name: 'NetworkSection',
    data() {
        return {
            network,
        }
    },
    mounted() {
        const circles = document.querySelectorAll(".circle_filled");
        circles.forEach((item, index) => {
            if (network[index].percentage <= 12.5) {
                item.style.clipPath = `polygon(50% 50%, 0 50%, 0 ${50 - ((50 / 12.5) * network[index].percentage)}%)`;
            } else if (network[index].percentage <= 37.5) {
                item.style.clipPath = `polygon(50% 50%, 0 50%, 0 0, ${(100 / 25) * (network[index].percentage - 12.5)}% 0`;
            } else if (network[index].percentage <= 62.5) {
                item.style.clipPath = `polygon(50% 50%, 0 50%, 0 0, 100% 0, 100% ${(100 / 25) * (network[index].percentage - 37.5)}%`;
            } else if (network[index].percentage <= 87.5) {
                item.style.clipPath = `polygon(50% 50%, 0 50%, 0 0, 100% 0, 100% 100%, ${100 - ((100 / 25) * (network[index].percentage - 62.5))}% 100%`;
            } else {
                item.style.clipPath = `polygon(50% 50%, 0 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 ${100 - ((50 / 12.5) * (network[index].percentage - 87.5))}%`;
            } // @https://github.com/mattiavolpe
        });
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
                <div v-for="work in network" class="skill d-flex">
                    <div class="box_circle">
                        <div class="circle_empty"></div>
                        <div class="circle_filled"></div>
                        <div class="percentage">{{ work.percentage }} <span>%</span></div>
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