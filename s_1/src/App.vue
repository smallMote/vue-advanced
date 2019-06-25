<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Watcher/>
  </div>
</template>

<script>
  import Watcher from './components/Watcher'
  export default {
    name: 'app',
    components: {
      Watcher
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
  margin-top: 60px;
}
</style>
