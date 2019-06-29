<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ul class="nav">
      <li v-for="(item, index) in nav_data" :key="index" @click="checked = item.text">
        <router-link 
        :to="item.path"
        :class="checked === item.text ? 'active' : ''"
        >
        {{ item.text }}
        </router-link>
      </li>
    </ul>
    <transition name="solid" mode="out-in">
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
        checked: 'Watcher',
        nav_data: [
          {
            path: '/watcher',
            text: 'Watcher',
          },
          {
            path: '/tsn',
            text: 'Tsn',
          },
          {
            path: '/tal',
            text: 'Tal',
          },
          {
            path: '/r-test',
            text: 'R-Test',
          },

        ]
      }
    }
  }
</script>

<style>
@import url('./assets/router-tsn.css');
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
  min-height: 100vh;
  background: slategray;
  color: white;
}
.nav {
  display: flex;
  flex-wrap: wrap;
}
.nav a {
  color: white;
  text-decoration: none;
}
.nav a:hover {
  color: deepskyblue
}
.active {
  color: deepskyblue;
  border-bottom: 1px solid deepskyblue;
}
ul.nav {
  width: 95%;
  margin: 30px;
}
.nav li {
  list-style-type: none;
  text-align: start;
  padding: 5px 0;
  flex: 1;
  min-width: 120px;
}
.btnGroup {
  margin: 15px;
}
#checkbox:checked ~ li {
  background: red;
}
</style>
