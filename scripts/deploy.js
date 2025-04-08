// deploy.js
async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contract with the account:", deployer.address);

  const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
  const contract = await SimpleStorage.deploy();

  await contract.waitForDeployment(); // ✅ Use this instead of .deployed()

  console.log(`Contract deployed to: ${contract.target}`); // use .target instead of .address in Hardhat 2.20+
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
