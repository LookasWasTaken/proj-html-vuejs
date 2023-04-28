<script>
import HeaderMenu from "./HeaderMenu.vue";
import JumboTron from "./JumboTron.vue";

export default {
    name: 'AppHeader',
    components: {
        HeaderMenu,
        JumboTron,
    },
}
</script>

<template>
    <header>
        <HeaderMenu></HeaderMenu>
        <JumboTron></JumboTron>
    </header>
</template>