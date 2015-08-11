# Solidity Compiler for Meteor

Provides you with a `Contracts` Object with all Solidity Contracts found in the project folder.

## Installation

Install (Solidity Compiler)(https://github.com/ethereum/cpp-ethereum).

Install this package
```
$ meteor add mhhf:solidity
```

## Usage

This package automatically finds all `.sol` files in your project and provides
each Contract with additional information: binary, abi, natspecdev, natspecuser
in an global `Contracts` Object.


## License

MIT 
