import { quotes } from '$lib/consts';

function quote(s: undefined): undefined;
function quote(s: string): string;

function quote(s: string | undefined): string | undefined {
	if (s === undefined) return undefined;
	s = s.replace(/"([^"]+)"/g, `${quotes[0]}$1${quotes[1]}`);
	return s.replace(/'([^']+)'/g, `${quotes[2]}$1${quotes[3]}`);
}

export default quote;
