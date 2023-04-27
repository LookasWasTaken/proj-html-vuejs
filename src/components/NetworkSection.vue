<script>
import { state } from '../assets/data/state';

export default {
    name: 'NetworkSection',
    data() {
        return {
            state
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
                <div class="skill d-flex gap-3">
                    <div class="circle">
                        [0]
                    </div>
                    <div class="info">
                        <h3>Leadership</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div class="skill d-flex gap-3">
                    <div class="circle">
                        [1]
                    </div>
                    <div class="info">
                        <h3>Psychology</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div class="skill d-flex gap-3">
                    <div class="circle">
                        [15]
                    </div>
                    <div class="info">
                        <h3>Flexibility</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
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