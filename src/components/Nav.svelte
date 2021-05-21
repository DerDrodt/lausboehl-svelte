<script lang="ts">
	import { page } from '$app/stores';
</script>

<nav>
	<ul>
		<li>
			<a aria-current={$page.path === '/' ? 'page' : undefined} href="/">Home</a>
		</li>

		<li>
			<a
				rel="prefetch"
				aria-current={$page.path === '/aktuelles' ? 'page' : undefined}
				href="/aktuelles">Aktuelles</a
			>
		</li>
		<li>
			<a
				rel="prefetch"
				aria-current={$page.path === '/chronik' ? 'page' : undefined}
				href="/chronik">Chronik</a
			>
		</li>
		<li>
			<a rel="prefetch" aria-current={$page.path === '/presse' ? 'page' : undefined} href="/presse"
				>Presseartikel</a
			>
		</li>
		<li>
			<a
				rel="prefetch"
				aria-current={$page.path === '/leserbriefe' ? 'page' : undefined}
				href="/leserbriefe">Leserbriefe</a
			>
		</li>
	</ul>
</nav>

<style lang="scss">
	nav {
		font-weight: 300;
		padding: 0 1em;
		color: var(--text-color);
		font-size: 1.1rem;
	}

	ul {
		margin: 0;
		padding: 0;

		&::after {
			/* clearfix */
			content: '';
			display: block;
			clear: both;
		}
	}

	li {
		display: block;
		float: left;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
		color: inherit;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
		color: var(--accent-color);
	}
</style>
