import fs from 'fs';
import quotes from './util/quotes';
import type { Artikel } from './types/presse';
import { formatDate } from './date';

export default function (): Artikel[] {
	const json = fs.readFileSync('src/content/presse.json', 'utf-8');
	const articles = JSON.parse(json);
	return articles.map(({ title, subtitle, sourceName, date, href }) => ({
		title: quotes(title),
		subtitle: quotes(subtitle),
		sourceName,
		dateString: formatDate(new Date(date)),
		date: new Date(date),
		href,
	}));
}
