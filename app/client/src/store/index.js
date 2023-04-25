import { HTTP } from "@/api/api";
import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth.module";

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
		clearUser: (state) => {
			state.currentUser = { username: "", password: "" };
		},
	},
	actions: {
		async createUser(context, payload) {
			await HTTP.post("/users/create", { username: payload.username, password: payload.password })
				.then(() => {
					context.commit("setCurrentUser", payload);
					if (payload.confirmCallBack) {
						payload.confirmCallBack();
					}
				})
				.catch((err) => {
					console.log(err);
				});
		},
		async authenticateUser(context, payload) {
			await HTTP.post("/users/login", { username: payload.username, password: payload.password })
				.then(() => {
					context.commit("setCurrentUser", payload);
					if (payload.confirmCallBack) {
						payload.confirmCallBack();
					}
				})
				.catch((err) => {
					console.log(err);
				});
		},
		clearUser(context) {
			context.commit("clearUser");
		},
	},
	modules: {
		auth,
	},
});
