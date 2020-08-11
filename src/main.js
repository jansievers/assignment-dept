// main.js
import Vue from 'vue';
import App from './App.vue';

import Header from './components/Header.vue';
import List from './pages/List.vue';
import Details from './pages/Details.vue';

// Global component, just try them on one page in the first place
Vue.component('app-header', Header); 
Vue.component('app-list', List); 
Vue.component('app-details', Details); 

new Vue({
  el: '#app',
  render: h => h(App)
});
