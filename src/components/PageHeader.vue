
<template>
    <div class="page-header">
        <button class="btn" id="menu" @click="toggleNavbar()"><i class="fas fa-bars" /></button>
        <h4 class="page-header-title" :style="{'text-align': headerTitle.align}">{{headerTitle.text}}</h4>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import { useStore } from "vuex"

export default defineComponent({
    name: "PageHeader",
    props: {
        headerTitle:{
            type: Object,
            required: false
        }
    },
    setup(props) {
        function toggleNavbar() {
            const store = useStore();
            let showNav = store.state.showNav;
            store.dispatch('toggleNavbar', !showNav)
        }

        return {toggleNavbar}
    },
})
</script>
