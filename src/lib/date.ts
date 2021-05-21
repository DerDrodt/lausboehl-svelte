export const formatDate = (
	d: Date,
	opts: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' },
): string => {
	try {
		const formatter = new Intl.DateTimeFormat('de', opts);
		return formatter.format(d);
	} catch (e) {
		return '';
	}
};
