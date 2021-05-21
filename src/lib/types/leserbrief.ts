export interface Metadata {
	title: string;
	author: string;
	sourceName: string;
	date: Date;
	dateString: string;
	responseTo?: string;
	hideDay?: boolean;
}

export interface Leserbrief {
	metadata: Metadata;
	html: string;
	slug: string;
}
