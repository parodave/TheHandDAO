import { config as dotenv } from 'dotenv'
dotenv()
import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.24',
    settings: { optimizer: { enabled: true, runs: 200 } },
  },
  networks: {
    base: {
      url: process.env.BASE_RPC_URL!,
      accounts: [process.env.DEPLOYER_PRIVATE_KEY!],
      chainId: 8453,
    },
  },
}
export default config

