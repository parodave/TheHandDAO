import { ethers } from 'hardhat'

async function main() {
  const [deployer] = await ethers.getSigners()
  console.log('Deploying with:', deployer.address)

  const Token = await ethers.getContractFactory('HandToken')
  const token = await Token.deploy()
  await token.waitForDeployment()

  const Timelock = await ethers.getContractFactory('HandTimelock')
  const minDelay = 3600
  const proposers: string[] = []
  const executors: string[] = []
  const timelock = await Timelock.deploy(minDelay, proposers, executors)
  await timelock.waitForDeployment()

  const Governor = await ethers.getContractFactory('HandGovernor')
  const governor = await Governor.deploy(await token.getAddress(), await timelock.getAddress())
  await governor.waitForDeployment()

  console.log('Token:', await token.getAddress())
  console.log('Timelock:', await timelock.getAddress())
  console.log('Governor:', await governor.getAddress())
}

main().catch((e) => { console.error(e); process.exit(1) })

