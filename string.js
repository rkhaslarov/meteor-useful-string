Object.assign(String.prototype, {
	capitalize : function () {
		return this.replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase(); });
	},
	camelize : function (separator = "_") {
		let result = "";
		this.split(separator).forEach(str => result += str.capitalize());
		return result;
	},
	replaceAll : function (search, replacement) {
		return this.replace(new RegExp(search, 'g'), replacement);
	},
	contains : function (str) {
		return this.indexOf(str) >= 0;
	},
	quote : function (quoteChar = '"') {
		return [quoteChar, this.valueOf(), quoteChar].join('');;
	},
	unquote : function (quoteChar = '"') {
		return this[0] === quoteChar && this[this.length - 1] === quoteChar ? this.slice(1, this.length - 1) : this;
	},
	chars : function () {
		return this.split('');
	},
	lines : function () {
		return this.split(/\r\n?|\n/);
	},
	reverse : function () {
		return this.chars().reverse().join('');
	},
	base64Encode : function() {
		return btoa(this);
	},
	base64Decode : function() {
		return atob(this);
	},
	stripTags : function (str) {
		return this.replace(/<\/?[^>]+>/g, '');
	},
	format : function() {
		var str = this;
		for (var i = 0; i < arguments.length; i++) {       
			var reg = new RegExp("\\{" + i + "\\}", "gm");             
			str = str.replace(reg, arguments[i]);
		}
		return str;
	},
	swapCase : function () {
		return this.replace(/\S/g, function(c) {
			return c.isUpper() ? c.toLowerCase() : c.toUpperCase();
		});
	},
	isAlpha : function () {
		return !/[^a-z\xDF-\xFF]|^$/.test(this.toLowerCase());
	},
	isAlphaNumeric : function () {
		return !/[^0-9a-z\xDF-\xFF]/.test(this.toLowerCase());
	},
	isNumeric : function () {
		return !/[^0-9]/.test(this.valueOf());
	},
	isUpper : function () {
		return this.isAlpha() && this.toUpperCase() === this.valueOf();
	},
	isLower : function () {
		return this.isAlpha() && this.toLowerCase() === this.valueOf();
	},
	isBlank : function () {
		return (/^\s*$/).test(this.valueOf());
	},
	md5: function () {
		return md5(this.valueOf());
	},
	toBoolean: function () {
		return this.valueOf() === "true";
	}
});