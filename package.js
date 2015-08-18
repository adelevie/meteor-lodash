Package.describe({
  name: "adelevie:meteor-lodash",
  summary: "Wrapper for Lo-Dash v3.10.1",
  version: "3.10.1",
  git: "https://github.com/erasaur/meteor-lodash.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');

  api.addFiles('lodash/lodash.js');
  api.addFiles('export.js');

  api.export('lodash');
});

