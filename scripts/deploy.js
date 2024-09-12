const hre = require("hardhat");

async function main() {
  const Token = await hre.ethers.getContractFactory("Token");
  const token = await Token.deploy(100);
  await token.waitForDeployment();
  console.log("Token deployed to:", await token.getAddress());

  const DEX = await hre.ethers.getContractFactory("DEX");
  const dex = await DEX.deploy(await token.getAddress(), 100);
  await dex.waitForDeployment();
  console.log("DEX deployed to:", await dex.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});