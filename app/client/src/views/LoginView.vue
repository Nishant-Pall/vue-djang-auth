<template>
	<AuthForm title="Login Page" button-text="Login" dispatchFunctionName="authenticateUser" />
</template>

<script>
import AuthForm from "@/components/AuthForm.vue";

export default {
	components: { AuthForm },
};
</script>
