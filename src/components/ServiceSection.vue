<script>
import { state } from "../assets/data/state";

export default {
    name: 'ServiceSection',
    data() {
        return {
            state
        }
    }
}
</script>

<template>
    <section>
        <div class="container">
            <div class="row row-cols-3">
                <div class="col p-5">
                    <h6>OUR BUSINESS AREA</h6>
                    <h2 class="my-3">Logistics Services</h2>
                    <p>We are leaders in providing logistics services with a set of cutting edge technologies and a team of
                        experienced and renowned professionals.</p>
                    <div class="d-flex align-items-center gap-3 my-4">
                        <a class="btn btn-custom bg_light" href="#" role="button">Tradition</a>
                        <a class="btn btn-custom bg_light" href="#" role="button">Quality</a>
                        <a class="btn btn-custom bg_light" href="#" role="button">Security</a>
                    </div>
                    <a class="btn btn-custom bg_elf" href="#" role="button">READ MORE</a>
                </div>
                <div class="col">
                    <div class="card p-5 d-flex flex-column align-item-center justify-content-between gap-2 border-0">
                        <img class="img-fluid" src="../assets/img/gallery-3.jpg" alt="technology image">
                        <h4>Technology</h4>
                        <p>Focused on developing technology solutions adapted to our client's need.</p>
                    </div>
                </div>
                <div class="col">
                    <div class="card p-5 d-flex flex-column align-item-center justify-content-between gap-2 border-0">
                        <img class="img-fluid" src="../assets/img/gallery-5.jpg" alt="transport image">
                        <h4>Transport</h4>
                        <p>We develop operational strategies to improve logistical efficiency</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>