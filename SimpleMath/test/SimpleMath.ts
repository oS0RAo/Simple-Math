import { expect, assert } from "chai";
import { network } from "hardhat";

const { ethers } = await network.create();

describe("SimpleMath", function () {
 it("should add two numbers correctly", async function () { // Test case
    const SimpleMath = await ethers.deployContract("SimpleMath");
    assert.equal(await SimpleMath.add(2n, 3n), 5n); 
  });

  it("should subtract two numbers correctly", async function () { 
    const SimpleMath = await ethers.deployContract("SimpleMath");
    assert.equal(await SimpleMath.subtract(5n, 2n), 3n);
  });

  it("should multiplt two numbers correctly", async function () {
    const SimpleMath = await ethers.deployContract("SimpleMath");
    assert.equal(await SimpleMath.multiply(2n, 3n), 6n);
  });

  it("should divide two numbers correctly", async function () {
    const SimpleMath = await ethers.deployContract("SimpleMath");
    assert.equal(await SimpleMath.divide(6n, 2n), 3n);
  });
});
