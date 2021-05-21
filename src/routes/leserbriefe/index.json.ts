import getLeserbriefe from '$lib/gen-leserbrief';

import type { RequestHandler } from '@sveltejs/kit';
import type { Leserbrief } from '$lib/types/leserbrief';

let leserbriefe: Leserbrief[] | undefined = undefined;

export const get: RequestHandler = async (req) => {
	if (!leserbriefe) leserbriefe = getLeserbriefe();

	return {
		body: leserbriefe,
	};
};
