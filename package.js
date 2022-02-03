Package.describe({
  name: 'igoandtrace:code-types-collection',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.1.1');
  api.use('ecmascript');
  api.use('zimme:collection-timestampable@1.0.9');
  api.use('mongo@1.1.17');
  api.mainModule('code-types-collection.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('code-types-collection');
  api.mainModule('code-types-collection-tests.js');
});
