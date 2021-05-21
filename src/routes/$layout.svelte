<script lang="ts">
	import { browser } from '$app/env';

	import Header from '../components/Header.svelte';

	import '../app.css';

	if (browser) {
		import('../components/carousel').then((_) => {});
	}
</script>

<Header />
<main><slot /></main>

<style lang="scss">
	main {
		padding: var(--nav-h) 0 0 0;
		width: 60vw;
		margin: 0 auto;
	}
</style>
