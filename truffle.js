const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    // rinkeby: {
    //   host: "localhost", // Connect to geth on the specified
    //   port: 8545,
    //   from: "0x0085f8e72391Ce4BB5ce47541C846d059399fA6c", // default address to use for any transaction Truffle makes during migrations
    //   network_id: 4,
    //   gas: 4612388 // Gas limit used for deploys
    // }
    rinkeby: {
      provider: function() {
        return new HDWalletProvider("bless crucial heart salute where grace bonus fluid vapor various layer noise", 'https://rinkeby.infura.io/v3/9596efc686804358a9963e4fd9897a99')
      },
      network_id: '2',
      gas: 4500000,
      gasPrice: 25000000000,
    },
  }
};
