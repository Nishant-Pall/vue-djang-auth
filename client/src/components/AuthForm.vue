<template>
	<v-container fill-height>
		<v-row justify="center">
			<v-card min-width="500px">
				<v-form>
					<v-card-title>{{ title }}</v-card-title>
					<v-card-text>
						<v-container>
							<v-row>
								<v-text-field label="Username*" v-model="username" required></v-text-field>
							</v-row>
							<v-row>
								<v-text-field label="Password*" v-model="password" required></v-text-field>
							</v-row>
						</v-container>
						<small>*indicates required field</small>
					</v-card-text>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn color="primary" text :loading="loading" @click="submitForm">{{ buttonText }}</v-btn>
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
	props: {
		title: String,
		buttonText: String,
		dispatchFunctionName: String,
	},
	methods: {
		submitForm() {
			this.loading = true;
			this.$store.dispatch(`${this.dispatchFunctionName}`, {
				username: this.username,
				password: this.password,
				confirmCallBack: this.redirectToHome,
			});
			this.loading = false;
		},
		redirectToHome() {
			this.$router.push("home");
		},
	},
};
</script>
