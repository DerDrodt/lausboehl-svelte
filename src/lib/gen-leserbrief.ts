import fs from 'fs';
import path from 'path';
import mdIt from 'markdown-it';
import type { Leserbrief, Metadata } from '$lib/types/leserbrief';
import { extractFrontmatter } from './util/markdown';
import { quotes } from '$lib/consts';
import { formatDate } from './date';
import quote from './util/quotes';

export default function getChronik(): Leserbrief[] {
	return fs
		.readdirSync('src/content/leserbriefe')
		.map((file) => {
			if (path.extname(file) !== '.md') return;

			const match = /^(.+)\.md$/.exec(file);
			if (!match) throw new Error(`Invalid filename '${file}'`);
			const [, slug] = match;

			const markdown = fs.readFileSync(`src/content/leserbriefe/${file}`, 'utf-8');

			const { content, metadata } = extractFrontmatter<Metadata>(markdown);

			const dateYYYMMDD = (metadata.date as unknown) as string;
			const date = new Date(dateYYYMMDD);

			const dateString = formatDate(
				date,
				metadata.hideDay ? { month: 'long', year: 'numeric' } : undefined,
			);
			metadata.date = date;
			metadata.dateString = dateString;
			metadata.responseTo = quote(metadata.responseTo);
			metadata.title = metadata.title.replace(/--/g, '–');

			const md = mdIt({
				typographer: true,
				quotes,
			});

			const html: string = md.render(
				content
					.replace(/^\t+/gm, (match) => match.split('\t').join('  '))
					.replace(/<=>/g, '&Leftrightarrow;')
					.replace(/=>/g, '&Rightarrow;'),
			);

			return {
				html,
				metadata,
				slug,
			};
		})
		.filter((p) => p !== null && p !== undefined)
		.sort((a, b) => b.metadata.date.getTime() - a.metadata.date.getTime());
}
