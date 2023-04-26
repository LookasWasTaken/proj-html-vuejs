<script>
import { state } from "../assets/data/state";
import HeaderMenu from "./HeaderMenu.vue";

export default {
    name: 'AppHeader',
    components: {
        HeaderMenu,
    },
    data() {
        return {
            state
        }
    }
}
</script>

<template>
    <header>
        <HeaderMenu></HeaderMenu>
    </header>
</template>