// main.js
import Vue from 'vue';
import App from './App.vue';
import Header from './components/Header.vue';

// Routing
import VueRouter from 'vue-router';
import {routes} from './routes'

Vue.use(VueRouter);
const router = new VueRouter(
  {routes: routes} 
);

// Global component, just try them on one page in the first place
Vue.component('app-header', Header); 

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
