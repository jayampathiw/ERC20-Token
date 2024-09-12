const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("DeployModule", (m) => {
  const token = m.contract("Token", [100]);
  
  const dex = m.contract("DEX", [
    m.getContractAddress(token),
    100
  ]);

  return { token, dex };
});