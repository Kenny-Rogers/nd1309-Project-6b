const HDWallet = require('truffle-hdwallet-provider');
const infuraKey = "6a205808d1074079a93fb7269c2daf72";

const fs = require('fs');
const mnemonic = fs.readFileSync("../.secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    goerli: {
      provider: () => new HDWallet(mnemonic, `https://goerli.infura.io/v3/${infuraKey}`),
      network_id: 5,       
      gas: 4465030        
    }
  }
};