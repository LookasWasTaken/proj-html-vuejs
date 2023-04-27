<script>
import { state } from '../assets/data/state';

export default {
    name: 'BannerSection',
    data() {
        return {
            state
        }
    },
}
</script>

<template>
    <section id="banner" class="d-flex">
        <div class="container d-flex">
            <img class="img-fluid" src="../assets/img/logo-5.png" alt="">
            <img class="img-fluid" src="../assets/img/logo-1.png" alt="">
            <img class="img-fluid" src="../assets/img/logo-2.png" alt="">
            <img class="img-fluid" src="../assets/img/logo-3.png" alt="">
            <img class="img-fluid" src="../assets/img/logo-4.png" alt="">
            <img class="img-fluid" src="../assets/img/logo-5.png" alt="">
        </div>
    </section>
</template>