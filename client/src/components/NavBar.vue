<template>
	<nav>
		<v-snackbar v-model="snackbar" :timeout="3000" color="primary">
			{{ text }}
			<template v-slot:action="{ attrs }">
				<v-btn color="white" v-bind="attrs" text @click="snackbar = false"> Close </v-btn>
			</template>
		</v-snackbar>
		<v-toolbar flat>
			<v-toolbar-title>Yo {{ this.$store.state.currentUser?.username ?? "" }}</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn v-if="!signedIn" @click="onRegister" color="success">
				{{ this.$route.name === "signup" ? `Login in` : `Sign up` }}
			</v-btn>
			<v-btn v-if="signedIn" @click="signOut" text dark color="red">Sign out</v-btn>
		</v-toolbar>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			snackbar: false,
			text: "",
		};
	},
	methods: {
		signOut() {
			this.$store.dispatch("clearUser");
		},
		onRegister() {
			if (this.$route.name === "signup") {
				this.$router.push("login");
			} else if (this.$route.name === "login") {
				this.$router.push("signup");
			}
		},
	},
	computed: {
		signedIn() {
			if (this.$store.state.currentUser.username === "") {
				return false;
			}
			return true;
		},
	},
};
</script>

<style></style>
