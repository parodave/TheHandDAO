import snapshot from '@snapshot-labs/snapshot.js'
import { Wallet, JsonRpcProvider } from 'ethers'

const hub = 'https://hub.snapshot.org' // mainnet
const client = new snapshot.Client712(hub)

const SPACE = 'thehand.eth' // à personnaliser quand l’espace est créé
const PRIVATE_KEY = process.env.DEPLOYER_PRIVATE_KEY!
const provider = new JsonRpcProvider(process.env.BASE_RPC_URL!)
const wallet = new Wallet(PRIVATE_KEY, provider)

async function main() {
  const receipt = await client.proposal(wallet, {
    space: SPACE,
    type: 'single-choice',
    title: 'Distribuer revenus C-01',
    body: 'Proposition de distribution mensuelle',
    choices: ['Oui', 'Non'],
    start: Math.floor(Date.now() / 1e3),
    end: Math.floor(Date.now() / 1e3) + 3 * 24 * 3600,
    snapshot: 'latest',
    metadata: {},
    plugins: {},
    discussion: ''
  })
  console.log('Proposal:', receipt)
}
main()

