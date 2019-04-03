export default class {
	search: URLSearchParams;
	constructor(search: string) {
		this.search = new URLSearchParams(search);
	}
	has(query: string, value?: string) {
		this.search.get('q')
	}
}
