export const maxBy = <T>(arr: T[], f: (arg: T) => number) => {
	let max: number | undefined = undefined;
	let el: T | undefined = undefined;
	for (const e of arr) {
		const val = f(e);
		if (max === undefined || val > max) {
			max = val;
			el = e;
		}
	}

	return el;
};
