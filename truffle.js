require('babel-register')({
  ignore: /node_modules\/(?!zeppelin-solidity)/,
});
require('babel-polyfill');
const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    kpLocal: {
      host: 'localhost',
      port: 8545,
      gas: 4600000,
      network_id: 28699,
    },
    testrpc: {
      host: 'localhost',
      gas: 4600000,
      port: 8545,
      network_id: '*',
    },
    kryptopal: {
      provider: function() {
        return new HDWalletProvider(
          'inform square tuition cluster jelly say foster grant release wet lonely monkey',
          'http://rpc.testnet.kryptopal.io:8545/'
        );
      },
      //host: 'http://rpc.testnet.kryptopal.io',
      //port: 8545,
      gas: 3000000,
      network_id: 28699,
    },
    // To get a ropsten node running locally, try the following:
    // geth --datadir=.ropsten --testnet --syncmode=light --cache 4096 --rpc --maxpeers 76 --lightpeers 50 console attatch
    ropsten: {
      network_id: 3,
      gas: 4000000,
      provider: () => {
        if (!process.env.MNEMONIC || !process.env.INFURA_KEY) {
          throw new Error(
            'You must set both the MNEMONIC and INFURA_KEY environment variables to use the ropsten network'
          );
        }
        return new HDWalletProvider(
          process.env.MNEMONIC,
          `https://ropsten.infura.io/${process.env.INFURA_KEY}`
        );
      },
    },
    // Use this if you want to use a ledger + geth
    ropstenGeth: {
      host: 'localhost',
      port: 8545,
      network_id: 3,
      gas: 4000000,
    },
    develop: {
      host: 'localhost',
      gas: 0xfffffffffff, // <-- Use this high gas value
      gasPrice: 0x01, // <-- Use this low gas price
      port: 9545,
      network_id: '*',
    },
  },
  mocha: {
    enableTimeouts: false,
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
};
