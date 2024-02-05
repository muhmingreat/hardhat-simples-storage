const { task } = require('hardhat/config')

task("block-number", "Prints the current block number").setAction(
  async (_, hre) => {
    const { ethers } = hre;
    const blockNumber = await ethers.provider.getBlockNumber();
    console.log("Current block number:", blockNumber);
  }
);

// Other Hardhat configuration settings go here

module.exports = {
  // Your other Hardhat configuration settings
};