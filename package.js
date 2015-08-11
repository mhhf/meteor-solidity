Package.describe({
  summary: "Provides all Compiled Solidity Contracts with binary,json-abi,natspec-dev,natspec-user in an \"Contracts\" Object.",
  version: "0.1.0",
  name: "napsy:solidity",
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
