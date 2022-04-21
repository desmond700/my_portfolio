<template>
  <navigation-bar />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavigationBar from './components/NavigationBar.vue'

export default defineComponent({
  name: 'App',
  components: {
    NavigationBar
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  height: 100vh;
  text-align: center;
  color: #2c3e50;
}
</style>
