import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import AnimatedNumber from "animated-number-vue";
import 'animate.css/animate.min.css';
Vue.config.productionTip = false;
Vue.component("AnimatedNumber", AnimatedNumber);
Vue.prototype.axios=axios;
Vue.prototype.store=store;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
