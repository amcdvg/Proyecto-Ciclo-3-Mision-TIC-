import Vue from 'vue'
import RegistroApp from './RegistroApp.vue'
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(RegistroApp),
}).$mount('#registroApp')
