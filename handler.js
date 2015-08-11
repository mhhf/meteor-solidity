var execSync = Npm.require('sync-exec');

var fileModeHandler = function ( compileStep ) {
  
  var fileContents = compileStep.read().toString('utf8');
  var cmd = "solc --input-file "+compileStep.inputPath + " --combined-json binary,json-abi,natspec-dev,natspec-user";
  // var contract = web3.eth.compile.solidity( fileContents );
  var out = execSync(cmd);
  
  if( out.stderr ) {
    throw new Error( out.stderr );
  }
  
  var contracts = {};
  _.each(JSON.parse(out.stdout).contracts, function( con, name ){
    contracts[name] = {
      binary: con.binary, 
      abi: JSON.parse(con["json-abi"]),
      natspecdev: JSON.parse(con["natspec-dev"]),
      natspecuser: JSON.parse(con["natspec-user"])
    };
  });
  
  compileStep.addJavaScript({
    path: compileStep.inputPath + '.js',
    sourcePath: compileStep.inputPath,
    data: "_.extend(Contracts,"+JSON.stringify(contracts)+");"
  });
}


Plugin.registerSourceHandler( "sol", fileModeHandler );
