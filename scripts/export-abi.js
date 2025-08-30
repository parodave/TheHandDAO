const fs = require('fs');
const path = require('path');
const artifactsDir = path.join(__dirname, '..', 'artifacts', 'contracts')
const outDir = path.join(__dirname, '..', 'app', 'abi')
fs.mkdirSync(outDir, { recursive: true })
for (const name of ['HandToken.sol', 'HandGovernor.sol', 'HandTimelock.sol']) {
  const file = path.join(artifactsDir, name, name.replace('.sol','').concat('.json'))
  const json = JSON.parse(fs.readFileSync(file, 'utf8'))
  fs.writeFileSync(path.join(outDir, name.replace('.sol','.abi.json')), JSON.stringify(json.abi, null, 2))
}
console.log('ABI export done -> app/abi')

