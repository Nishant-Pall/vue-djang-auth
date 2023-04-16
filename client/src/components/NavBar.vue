<template>
	<nav>
		<v-toolbar flat>
			<v-toolbar-title>Yo</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn v-if="signedIn" text dark color="red">Sign out</v-btn>
		</v-toolbar>
	</nav>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {},
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
