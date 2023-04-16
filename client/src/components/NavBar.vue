<template>
	<nav>
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
		return {};
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
