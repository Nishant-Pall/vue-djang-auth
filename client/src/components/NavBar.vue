<template>
	<nav>
		<v-snackbar v-model="snackbar" :timeout="3000" color="primary">
			{{ text }}
			<template v-slot:action="{ attrs }">
				<v-btn color="white" v-bind="attrs" text @click="snackbar = false"> Close </v-btn>
			</template>
		</v-snackbar>
		<v-toolbar flat>
			<v-toolbar-title>Yo</v-toolbar-title>
			<v-spacer></v-spacer>
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
