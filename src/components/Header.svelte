<script>
	import Nav from './Nav.svelte';
</script>

<header>
	<a href="/"><h1>Bürgerinitiative Lausböhl</h1></a>
	<Nav />
</header>

<style lang="scss">
	header {
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 16px;
		box-shadow: 0 -0.4rem 0.9rem 0.2rem rgba(0, 0, 0, 0.5);
		position: fixed;
		width: 100vw;
		height: var(--nav-h);
		background-color: #fff;
		z-index: 999;

		a {
			text-decoration: none;
		}

		h1 {
			padding: 0;
			margin: 0;
		}
	}
</style>
