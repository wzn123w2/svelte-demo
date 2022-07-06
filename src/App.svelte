<script>
	import Layout from "./Layout/index.svelte"
</script>

<main>
	<Layout />
</main>

<style>
	main {
		width: 100%;
		height: 100%;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>