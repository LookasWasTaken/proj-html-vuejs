<script>
import { state } from '../assets/data/state';
import { banner } from '../assets/data/banner';

export default {
    name: 'BannerSection',
    data() {
        return {
            state,
            banner,
        }
    },
}
</script>

<template>
    <section id="banner" class="d-flex">
        <div class="container d-flex">
            <img v-for="(img, index) in banner" class="img-fluid" :src="img" :alt="`logo ${index}`">
        </div>
    </section>
</template>