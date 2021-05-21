<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const res = await fetch('/chronik.json');

		if (res.ok) {
			return {
				props: {
					chronik: await res.json(),
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
	import type { ChronikItem } from '$lib/types/chronik';

	export let chronik: ChronikItem[];
</script>

<svelte:head>
	<title>Chronik | Bürgerinitiative Lausböhl</title>
</svelte:head>

<h2>Chronik</h2>

{#if false}<slot />{/if}

{#each chronik as item}
	<h3>{item.metadata.title}</h3>
	{@html item.html}
{/each}
