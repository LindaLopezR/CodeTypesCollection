Package.describe({
  name: 'igoandtrace:code-types-collection',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('2.7.3');
  api.use('ecmascript');
  api.mainModule('code-types-collection.js', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('code-types-collection');
  api.mainModule('code-types-collection-tests.js');
});
