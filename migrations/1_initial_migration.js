const Migrations = artifacts.require("Migrations");
const DogesonFactory = artifacts.require("DogesonFactory");

require('dotenv').config();

// module.exports = function (deployer) {
//   deployer.deploy(Migrations);
// };

module.exports = function (deployer, network, accounts) {
  deployer.deploy(DogesonFactory, process.env.FEE_TO_SETTER);
};