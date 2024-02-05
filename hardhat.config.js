require('@nomiclabs/hardhat-waffle')
require('dotenv').config()
require('@nomiclabs/hardhat-etherscan')
require('./block-number')
require('hardhat-gas-reporter')
require('solidity-coverage')
task('accounts', 'Print the list of accounts',async(taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners()
for (const account of accounts) {
console.log(account.address)
}
})

const RPC_URL = process.env.RPC_URL 
const SECRET_KEY = process.env.SECRET_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const COIN_MARKET_CAP_API = process.env.COIN_MARKET_CAP_API

module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: RPC_URL,
      accounts: [SECRET_KEY],
      chainId: 11155111,
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
    },
  },
  solidity: {
    version: "0.8.23",
    etherscan: {
      apiKey: ETHERSCAN_API_KEY,
    },
    gasReporter: {
      enable: true,
      outputFile: "gas-report.txt",
      noColors: true,
      currency: "USD",
      coinmarketcap: COIN_MARKET_CAP_API,
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 40000,
  },
};