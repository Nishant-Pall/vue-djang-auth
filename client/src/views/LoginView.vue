<template>
	<v-container fill-height>
		<v-row justify="center">
			<v-card min-width="500px">
				<v-form>
					<v-card-title>LOGIN PAGE</v-card-title>
					<v-card-text>
						<v-container>
							<v-row>
								<v-text-field label="Username*" required></v-text-field>
							</v-row>
							<v-row>
								<v-text-field label="Password*" required></v-text-field>
							</v-row>
						</v-container>
						<small>*indicates required field</small>
					</v-card-text>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn color="primary" text @click="submitForm" :loading="loading">LOGIN</v-btn>
					</v-card-actions>
				</v-form>
			</v-card>
		</v-row>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			username: "",
			password: "",
			loading: false,
		};
	},
	methods: {
		submitForm() {
			this.loading = true;
			this.$store
				.dispatch("authenticateUser", { username: this.username, password: this.password })
				.catch((err) => {
					console.log(err);
				})
				.finally(() => {
					this.loading = false;
				});
		},
	},
};
</script>
