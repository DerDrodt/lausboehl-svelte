import fs from 'fs';
import mdIt from 'markdown-it';
import anchor from 'markdown-it-anchor';
import { quotes } from '$lib/consts';

export default function getChronik(): string {
	const markdown = fs.readFileSync(`src/content/aktuelles.md`, 'utf-8');

	const md = mdIt({
		typographer: true,
		html: true,
		quotes,
	}).use(anchor, {
		level: 2,
		permalink: false,
	});

	const html: string = md.render(
		markdown
			.replace(/^\t+/gm, (match) => match.split('\t').join('  '))
			.replace(/<=>/g, '&Leftrightarrow;')
			.replace(/=>/g, '&Rightarrow;'),
	);

	return html;
}
