import Vue from 'vue';
import DashboardPlugin from './plugins/dashboard-plugin';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueToast from 'vue-toast-notification';

import 'vue-toast-notification/dist/theme-sugar.css';


// router setup
import router from './routes/router';
// plugin setup
Vue.use(DashboardPlugin);
Vue.use(VueAxios, axios);
Vue.use(VueToast);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
});
