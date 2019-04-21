import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import '@mdi/font/css/materialdesignicons.min.css';
import echarts from 'vue-echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/scatter';
import 'echarts/lib/component/polar';
//import 'echarts-gl';

import App from './App.vue'
import router from './routes';
import store from './store';

Vue.use(Buefy);
Vue.component('v-chart', echarts);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
