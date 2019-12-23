<template>
  <div id="app">
    <!-- <img alt="Vue logo"
         src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <VantTest />
    <Layout /> -->
    <router-view />
    <Tabbar />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
/* import VantTest from './components/VantTest'
import Layout from './components/Layout' */
import Tabbar from './components/Tabbar'

export default {
  name: 'app',
  components: {
    // HelloWorld
    /*    VantTest,
       Layout, */
    Tabbar
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
