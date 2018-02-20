module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
    host: "localhost",
    //port: 8545, //TESTRPC
    port: 7545, //GNACHE
    network_id: "*" // Match any network id
   }
  }
};
