<script>
import { state } from '../assets/data/state';

export default {
    name: 'LetterSection',
    data() {
        return {
            state
        }
    },
}
</script>

<template>
    <section id="letter" class="d-flex">
        <div class="left">
            <div class="info">
                <h6>NEWSLETTER</h6>
                <h2><span>Know</span> First</h2>
                <p>Follow closely and receive content about our company and the news of the current market</p>
            </div>
        </div>
        <div class="right">
            <form>
                <div class="mb-3">
                    <input v-model="state.name" type="text" class="form-control" id="text" placeholder="Name">
                </div>
                <div class="mb-3">
                    <input v-model="state.email" type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="E-Mail">
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <button @click="state.saveInfo()" type="submit" class="btn btn-custom">SUBSCRIBE</button>
            </form>
        </div>
    </section>
</template>