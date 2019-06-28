<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <transition name="fade-in">
      <router-view></router-view>
    </transition>
    
  </div>
</template>

<script>
  
  export default {
    name: 'app',
    components: {
      
    },
    data() {
      return {
      }
    }
  }
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .btnGroup {
    margin: 15px;
  }
</style>
