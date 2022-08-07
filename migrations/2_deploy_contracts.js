var UsdtToken = artifacts.require('./flatten/UsdtToken.sol')

module.exports = function (deployer) {
  deployer.deploy(UsdtToken)
}
