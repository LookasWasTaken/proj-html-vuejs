<script>
import { state } from "../assets/data/state";
import HeaderMenu from "./HeaderMenu.vue";
import JumboTron from "./JumboTron.vue";

export default {
    name: 'AppHeader',
    components: {
        HeaderMenu,
        JumboTron,
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
        <JumboTron></JumboTron>
    </header>
</template>