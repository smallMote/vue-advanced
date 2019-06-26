<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <router-view></router-view>
    <MyselfComp
      v-for="(btn, index) in btns"
      :key="index"
      :type="btn.type"
      :text="btn.text"
      class="btnGroup"
    >
      {{ btn.text }}
    </MyselfComp>
  </div>
</template>

<script>
  import MyselfComp from './components/MyselfComp'
  export default {
    name: 'app',
    components: {
      MyselfComp
    },
    data() {
      return {
        btns: [
          {type: 'success', text: '成功按钮'},
          {type: 'error', text: '错误按钮'},
          {type: 'warm', text: '警告按钮'},
          {type: 'info', text: '信息按钮'},
          {type: 'default', text: '默认按钮'},
        ]
      }
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
  .btnGroup {
    margin: 15px;
  }
</style>
