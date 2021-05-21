import fs from 'fs';
import path from 'path';
import mdIt from 'markdown-it';
import anchor from 'markdown-it-anchor';
import type { ChronikItem, Metadata } from '$lib/types/chronik';
import { extractFrontmatter } from './util/markdown';
import { quotes } from '$lib/consts';

export default function getChronik(): ChronikItem[] {
	return fs
		.readdirSync('src/content/chronik')
		.map((file) => {
			if (path.extname(file) !== '.md') return;

			const match = /^(.+)\.md$/.exec(file);
			if (!match) throw new Error(`Invalid filename '${file}'`);
			const [, slug] = match;

			const markdown = fs.readFileSync(`src/content/chronik/${file}`, 'utf-8');

			const { content, metadata } = extractFrontmatter<Metadata>(markdown);

			const md = mdIt({
				typographer: true,
				quotes,
			}).use(anchor, {
				level: 2,
				permalink: false,
				permalinkBefore: false,
				permalinkSymbol: '🔗',
				permalinkHref: (fragment: string) => `${slug}#${fragment}`,
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
		.sort((a, b) => (a.metadata.title < b.metadata.title ? 1 : -1));
}
