Package.describe({
  summary: "Provides all Compiled Solidity Contracts in a global Contracts Object.",
  version: "0.1.0",
  name: "napsy:solidity",
  git: "git@github.com:mhhf/meteor-solitidy.git"
});

Package.registerBuildPlugin({
  name: "compileSolidity",
  use: [
    "underscore@1.0.0"
  ],
  sources: [
    "handler.js",
    "init.js"
  ],
   npmDependencies: {
    'sync-exec': '0.6.1',
  }
});

Package.onUse(function(api) {
  api.export(['Contracts'], ['client', 'server']);
  api.addFiles("init.js", ['client', 'server']);
});
