<template>
	<v-container fill-height>
		<v-row justify="center">
			<v-card min-width="500px">
				<v-form ref="form">
					<v-card-title>SIGN UP</v-card-title>
					<v-card-text>
						<v-container>
							<v-row>
								<v-text-field
									label="Username*"
									required
									v-model="username"
									:rules="inputRules"
								></v-text-field>
							</v-row>
							<v-row>
								<v-text-field
									label="Password*"
									required
									v-model="password"
									:rules="inputRules"
								></v-text-field>
							</v-row>
						</v-container>
						<small>*indicates required field</small>
					</v-card-text>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn color="primary" text @click="submitForm" :loading="loading">SIGN UP</v-btn>
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
			inputRules: [(v) => v?.length >= 6 || "Minimum length is 6 characters"],
		};
	},
	methods: {
		submitForm() {
			if (this.$refs.form.validate()) {
				this.loading = true;
				this.$store.dispatch("createUser", {
					username: this.username,
					password: this.password,
					confirmCallBack: this.redirectToHome,
				});
				this.loading = false;
			}
		},
		redirectToHome() {
			this.$router.push("home");
		},
	},
};
</script>
