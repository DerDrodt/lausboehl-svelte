import getAktuelles from '$lib/gen-aktuelles';

import type { RequestHandler } from '@sveltejs/kit';

let aktuelles: string | undefined = undefined;

export const get: RequestHandler = async (req) => {
	if (!aktuelles) aktuelles = getAktuelles();

	return {
		body: { aktuelles },
	};
};
