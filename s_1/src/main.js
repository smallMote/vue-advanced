import Vue from 'vue'
import App from './App.vue'
import './components/global'
import VueRouter from 'vue-router'
Vue.config.productionTip = false
Vue.use(VueRouter)

import Watcher from './components/Watcher'
import TestRouter from './components/TestRouter'
import TestAutoLoad from './components/global/TestAutoLoad'
import RouterChildA from './components/RouterChildA'
import RouterChildB from './components/RouterChildB'
let routes = [
  {
    path: '/watcher',
    name: 'watcher',
    component: Watcher
  },
  {
    path: 't-aotu-loading',
    name: 'tal',
    component: TestAutoLoad
  },
  {
    path: '/r-test',
    component: TestRouter,
    children: [
      {
        path: 'r-childA',
        name: 'r-childA',
        component: RouterChildA
      },
      {
        path: 'r-childB',
        name: 'r-childB',
        component: RouterChildB
      },
    ]
  }
];
let router = new VueRouter({
  routes
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
