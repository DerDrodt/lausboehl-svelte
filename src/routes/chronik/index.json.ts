import getChronik from '$lib/gen-chronik';

import type { RequestHandler } from '@sveltejs/kit';
import type { ChronikItem } from '$lib/types/chronik';

let chronik: ChronikItem[] | undefined = undefined;

export const get: RequestHandler = async (req) => {
	if (!chronik) chronik = getChronik();

	return {
		body: chronik,
	};
};
