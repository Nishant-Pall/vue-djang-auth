import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import SignupView from "../views/SignupView.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		redirect: "/login",
	},
	{
		path: "/home",
		name: "home",
		component: HomeView,
	},
	{
		path: "/login",
		name: "login",
		component: LoginView,
	},
	{
		path: "/signup",
		name: "signup",
		component: SignupView,
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

router.beforeEach((to, from, next) => {
	const isProtected = to.name === "home";
	if (isProtected && store.state.currentUser.id === "") {
		next({
			path: "/login",
		});
	} else next();
});

export default router;
