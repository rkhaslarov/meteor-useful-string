Package.describe({
	name: 'rkhaslarov:useful-string',
	version: '1.0.0',
	summary: 'Collection of useful functions extended JavaScript String Object.',
	git: 'https://github.com/rkhaslarov/useful-string',
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.2.1');
	api.use(['ecmascript', 'rkhaslarov:md5@1.0.0']);
	api.addFiles(['string.js']);
});
