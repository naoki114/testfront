import Vue from "vue";
import App from "./App.vue";

// vee-validateのバリデートを自動にしない
configure({ mode: "passive" });

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
