<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <KeycloakDemo />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import KeycloakDemo from './components/KeycloakDemo.vue'

export default defineComponent({
  name: 'App',
  components: {
    KeycloakDemo
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
