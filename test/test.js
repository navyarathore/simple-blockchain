const { expect } = require("chai");

describe("SimpleStorage", function () {
  it("Should store and retrieve the correct value", async function () {
    const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
    const contract = await SimpleStorage.deploy();
    await contract.deployed();

    await contract.set(123);
    expect(await contract.get()).to.equal(123);
  });
});
