<template>
	<AuthForm title="Sign up Page" button-text="Sign Up" dispatchFunctionName="createUser" />
</template>

<script>
import AuthForm from "@/components/AuthForm.vue";

export default {
	components: { AuthForm },
};
</script>
