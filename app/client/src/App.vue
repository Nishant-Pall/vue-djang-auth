<template>
	<v-app id="app">
		<Navbar />
		<v-main>
			<router-view />
		</v-main>
	</v-app>
</template>

<script>
import Navbar from "./components/NavBar.vue";

export default { components: { Navbar } };
</script>

<style scoped>
#app {
	background: lightgrey;
}
</style>
