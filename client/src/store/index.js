import { HTTP } from "@/api/api";
import Vue from "vue";
import Vuex from "vuex";

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
		createUser: (context, payload) => {
			HTTP.post("/create", { ...payload }).then(() => {
				context.commit("setCurrentUser", payload);
			});
		},
	},
	modules: {},
});
