<script>
import { state } from '../assets/data/state';
import { info } from '../assets/data/info';

export default {
    name: 'MessageSection',
    data() {
        return {
            state,
            info,
        }
    },
}
</script>

<template>
    <section id="message" class="d-flex">
        <div class="left">
            <div class="info">
                <h6>SEND A MESSAGE</h6>
                <h2>Get in <span>Touch</span></h2>
                <p>We will responde to your message as soon as possible.</p>
            </div>
            <hr>
            <form class="row g-3">
                <div class="col-md-6">
                    <input v-model="state.userName" type="text" class="form-control" id="name" placeholder="Name">
                </div>
                <div class="col-md-6">
                    <input v-model="state.userEmail" type="email" class="form-control" id="email" placeholder="E-Mail">
                </div>
                <div class="col-md-6">
                    <input v-model="state.userPhone" type="text" class="form-control" id="phone" placeholder="Phone">
                </div>
                <div class="col-md-6">
                    <select class="form-select" id="select" disabled>
                        <option selected>More Info</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="col-md-12">
                    <textarea v-model="state.userMessage" class="form-control" placeholder="Message" id="send_text"></textarea>
                </div>
                <div class="col-12">
                    <button @click="state.storeInfo()" class="btn btn-custom">SEND</button>
                </div>
            </form>
        </div>
        <div class="right">
            <h4>{{ info.name }}</h4>
            <p>{{ info.desc1 }}</p>
            <p>{{ info.desc2 }}</p>
            <hr>
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
            <hr class="my-5">
            <a class="btn btn-custom px-4" href="#" role="button">VIEW MAP</a>
        </div>
    </section>
</template>