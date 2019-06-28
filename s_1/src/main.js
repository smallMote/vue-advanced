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
import Tsn from './components/Tsn'
import TsnA from './components/tr/TsnA'
import TsnB from './components/tr/TsnB'
import UserMyselfCom from './components/UseMyselfCom'
let routes = [
  //Myself component
  {
    path: '/myCom',
    name: 'myCom',
    component: UserMyselfCom
  },
  //watcher
  {
    path: '/tsn',
    name: 'Tsn',
    component: Tsn,
    redirect: '/tsn/tsn_a',
    children: [
      {
        path: '/tsn/tsn_a',
        name: 'tsn-a',
        component: TsnA
      },
      {
        path: '/tsn/tsn_b',
        name: 'tsn-b',
        component: TsnB
      },
    ]
  },
  {
    path: '/watcher',
    name: 'watcher',
    component: Watcher
  },
  //auto loading componet
  {
    path: 't-aotu-loading',
    name: 'tal',
    component: TestAutoLoad
  },
  //router's test router
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
  },
  
];
let router = new VueRouter({
  routes
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
