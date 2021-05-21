<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const res = await fetch('/leserbriefe.json');

		if (res.ok) {
			return {
				props: {
					leserbriefe: await res.json(),
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
	import type { Leserbrief } from '$lib/types/leserbrief';

	export let leserbriefe: Leserbrief[];
</script>

<svelte:head>
	<title>Leserbriefe | Bürgerinitiative Lausböhl</title>
</svelte:head>

<h2>Leserbriefe</h2>

{#if false}<slot />{/if}

<div class="content">
	{#each leserbriefe as l}
		<article class="leserbrief">
			<h3>{l.metadata.title}</h3>
			<h4>von {l.metadata.author}</h4>
			{#if l.metadata.responseTo}
				<p class="response-to">{l.metadata.responseTo}</p>
			{/if}
			<p class="source">Quelle: {l.metadata.sourceName}, {l.metadata.dateString}</p>
			<div class="text">
				{@html l.html}
			</div>
		</article>
	{/each}
</div>

<style lang="scss">
	.content {
		:global(h3) {
			margin: 24px 0 8px 0;
		}

		:global(h4) {
			margin: 0;
		}
	}

	.leserbrief {
		.response-to {
			margin: 8px 0;
		}

		.source {
			margin: 8px 0 26px 0;
		}

		.text {
			text-align: justify;
		}

		&:not(:last-of-type) {
			margin-bottom: 24px;
			padding-bottom: 8px;
			border-bottom: 1px solid #ddd;
		}
	}
</style>
