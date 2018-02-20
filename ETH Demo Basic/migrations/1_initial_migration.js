var Migrations = artifacts.require("./Migrations.sol");
var HelloWorld = artifacts.require("./helloworld.sol");
var ScoreStore = artifacts.require("./ScoreStore.sol");
var GameScore = artifacts.require("./GameScore.sol");

module.exports = function(deployer) {
  //deployer.deploy(Migrations);
  //deployer.deploy(HelloWorld);
  //deployer.deploy(ScoreStore);
  deployer.deploy(GameScore);
};
