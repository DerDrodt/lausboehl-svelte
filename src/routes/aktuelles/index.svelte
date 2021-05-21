<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const res = await fetch('/aktuelles.json');

		if (res.ok) {
			return {
				props: {
					html: (await res.json()).aktuelles,
				},
			};
		}

		const { message } = await res.json();
		return {
			error: new Error(message),
		};
	};
</script>

<script lang="ts">
	export let html: string;
</script>

<svelte:head>
	<title>Aktuelles | Bürgerinitiative Lausböhl</title>
</svelte:head>

<h2>Aktuelles</h2>
<div class="content">
	{@html html}
</div>

{#if false}<slot />{/if}

<style lang="scss">
	.content {
		padding-bottom: 32px;

		:global(img) {
			width: 100%;
		}
	}
</style>
