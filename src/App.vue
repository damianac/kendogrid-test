<template>
  <div id="app">
    <KendoGridComponent v-if="$store.getters.isLoggedIn"/>
    <LoginComponent v-else=""/>
  </div>
</template>

<script>
import LoginComponent from "./components/LoginComponent.vue"
import KendoGridComponent from "./components/KendoGridComponent.vue"
export default {
  name: 'app',
  components: {
    LoginComponent,
    KendoGridComponent,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: auto;
  margin-top: 60px;
}
</style>
