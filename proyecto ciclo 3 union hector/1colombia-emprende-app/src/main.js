import Vue from 'vue'
import NavegacionApp from './NavegacionApp.vue';
import ModuloRegistroApp from './ModuloRegistroApp.vue';
import HeaderApp from './PoliticasApp.vue'
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";


Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(NavegacionApp),
}).$mount('#navegacionApp')
new Vue({
  router,
  render: h => h(ModuloRegistroApp),
}).$mount('#moduloRegistroApp')
new Vue({
  router,
  render: h => h(HeaderApp),
}).$mount('#headerApp')
