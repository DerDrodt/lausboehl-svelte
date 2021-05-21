import getArticles from '$lib/gen-presse';

import type { RequestHandler } from '@sveltejs/kit';
import type { Artikel } from '$lib/types/presse';

let articles: Artikel[] | undefined = undefined;

export const get: RequestHandler = async (req) => {
	if (!articles) articles = getArticles();

	return {
		body: articles,
	};
};
