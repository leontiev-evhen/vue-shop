export default class CustomLocalStorage {

	constructor(key) {
	    this.key = key;
	}

	getCount () {
		if (localStorage[this.key]) {
			return Object.keys(JSON.parse(localStorage[this.key])).length;
		}
		return 0;
	}

	set (data) {
		localStorage[this.key] = JSON.stringify(data);
	}

	get () {
		return JSON.parse(localStorage[this.key] || '[]');
	}

	remove () {
		localStorage.removeItem(this.key);
	}

	clear () {
		localStorage.clear();
	}
}

