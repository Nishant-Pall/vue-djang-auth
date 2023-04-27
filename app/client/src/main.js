import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store";

import "./components/__global";

Vue.config.productionTip = false;

// eslint-disable-next-line no-unused-vars
var vm = new Vue({
	vuetify,
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");

window.$appRef = vm;
