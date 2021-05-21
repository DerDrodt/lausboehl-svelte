<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const res = await fetch('/presse.json');

		if (res.ok) {
			return {
				props: {
					articles: await res.json(),
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
	import type { Artikel } from '$lib/types/presse';

	export let articles: Artikel[];
</script>

<svelte:head>
	<title>Presseartikel | Bürgerinitiative Lausböhl</title>
</svelte:head>

<h2>Presseartikel</h2>

{#if false}<slot />{/if}

{#each articles as article}
	<h3>{article.title}</h3>
	{#if article.subtitle}
		<h4>{article.subtitle}</h4>
	{/if}
	<p>
		Quelle: <a rel="external" href={article.href}>{article.sourceName} am {article.dateString}</a>
	</p>
{/each}
