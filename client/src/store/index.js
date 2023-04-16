import { HTTP } from "@/api/api";
import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		currentUser: {
			id: "",
			username: "",
			password: "",
		},
	},
	getters: {},
	mutations: {
		setCurrentUser: (state, payload) => {
			state.currentUser = payload;
		},
	},
	actions: {
		async createUser(context, payload) {
			await HTTP.post("/users/create", { ...payload })
				.then(() => {
					context.commit("setCurrentUser", payload);
					router.push("home");
				})
				.catch((err) => {
					console.log(err.message);
				});
		},
		async authenticateUser(context, payload) {
			await HTTP.get("/users/authenticate", { ...payload })
				.then(() => {
					context.commit("setCurrentUser", payload);
					router.push("home");
				})
				.catch((err) => {
					console.log(err.message);
				});
		},
	},
	modules: {},
});
