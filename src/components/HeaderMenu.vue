<script>
import { state } from "../assets/data/state";

export default {
    name: 'HeaderMenu',
    data() {
        return {
            state
        }
    }
}
</script>

<template>
        <nav>
            <div class="container d-flex justify-content-between align-items-center py-3">
                <div class="open_hours">
                    <span>Open Hours: Mon - Sat / 9.00 - 18.00</span>
                </div>
                <div class="generals d-flex gap-5 justify-content-between align-items-center">
                    <span>+1 (305) 1234-5678</span>
                    <span>nexgen@example.com</span>
                    <div class="social d-flex gap-3">
                        <span>FB</span>
                        <span>TW</span>
                        <span>LI</span>
                    </div>
                </div>
            </div>
        </nav>
</template>