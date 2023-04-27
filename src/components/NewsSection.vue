<script>
import { state } from '../assets/data/state';
import { news } from '../assets/data/news';

export default {
    name: 'NewsSection',
    data() {
        return {
            state,
            news,
            showAll: false,
        }
    },
}
</script>

<template>
    <section id="news" class="py-5 my-3">
        <div class="container">
            <h6>OUR EDITORIAL CONTENT</h6>
            <h2 class="py-3">Latest <span>News</span></h2>
            <div class="d-flex justify-content-between align-items-center">
                <p>Every week we publish content about what is best in the business world.</p>
                <button @click="showAll = !showAll" class="btn btn-custom">SEE ALL</button>
            </div>
            <div class="row row-cols-3 g-3 py-5">
                <div v-for="(info, index) in news" class="col" v-show="showAll || index < 3">
                    <div class="card">
                        <img class="img-fluid" :src="info.img" :alt="`news n.${index}`">
                        <span>{{ info.text }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>