import { createPublicClient, http, getAddress } from "viem";
import { base, baseSepolia } from "viem/chains";
import { readFileSync } from "fs";

const useSepolia = process.env.NEXT_PUBLIC_USE_SEPOLIA === "true";
const chain = useSepolia ? baseSepolia : base;
const rpc = useSepolia ? (process.env.NEXT_PUBLIC_BASE_SEPOLIA_RPC || "https://sepolia.base.org") : (process.env.NEXT_PUBLIC_BASE_RPC || "https://mainnet.base.org");

const client = createPublicClient({ chain, transport: http(rpc) });

const ADDR = {
  GOVERNOR: process.env.NEXT_PUBLIC_GOVERNOR_ADDRESS,
  TREASURY: process.env.NEXT_PUBLIC_TREASURY_ADDRESS,
  ERC721: process.env.NEXT_PUBLIC_ERC721_ADDRESS,
  SNAPSHOT: process.env.NEXT_PUBLIC_SNAPSHOT_SPACE,
};

function safeAddr(x?: string) {
  try { return x ? getAddress(x) : ""; } catch { return ""; }
}

function loadAbi(path: string) {
  try { return JSON.parse(readFileSync(path, "utf8")); } catch { return null; }
}

// Optional: place ABIs in /abi
const governorAbi = loadAbi("abi/Governor.json") || [{"inputs":[],"name":"quorum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
const erc721Abi = loadAbi("abi/ERC721.json") || [
  {"inputs":[],"name":"name","outputs":[{"type":"string"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"symbol","outputs":[{"type":"string"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"totalSupply","outputs":[{"type":"uint256"}],"stateMutability":"view","type":"function"}
];

async function ping() {
  const start = Date.now();
  const chainId = await client.getChainId();
  const block = await client.getBlockNumber();
  const latency = Date.now() - start;

  let govQuorum: string|undefined;
  if (safeAddr(ADDR.GOVERNOR) && governorAbi) {
    try {
      const q = await client.readContract({ address: safeAddr(ADDR.GOVERNOR) as `0x${string}`, abi: governorAbi, functionName: "quorum", args: [] });
      govQuorum = (q as any)?.toString();
    } catch {}
  }

  let nft = { name: "", symbol: "", totalSupply: "" };
  if (safeAddr(ADDR.ERC721) && erc721Abi) {
    try {
      const [n, s, t] = await Promise.all([
        client.readContract({ address: safeAddr(ADDR.ERC721) as `0x${string}`, abi: erc721Abi, functionName: "name" }),
        client.readContract({ address: safeAddr(ADDR.ERC721) as `0x${string}`, abi: erc721Abi, functionName: "symbol" }),
        client.readContract({ address: safeAddr(ADDR.ERC721) as `0x${string}`, abi: erc721Abi, functionName: "totalSupply" }),
      ]);
      nft = { name: String(n), symbol: String(s), totalSupply: String(t) };
    } catch {}
  }

  const report = {
    network: useSepolia ? "Base Sepolia (84532)" : "Base (8453)",
    chainId,
    latestBlock: block.toString(),
    rpcLatencyMs: latency,
    rainbowkitProjectIdPresent: !!process.env.NEXT_PUBLIC_RAINBOWKIT_PROJECT_ID,
    addresses: {
      governor: safeAddr(ADDR.GOVERNOR),
      treasury: safeAddr(ADDR.TREASURY),
      erc721: safeAddr(ADDR.ERC721),
      snapshotSpace: ADDR.SNAPSHOT || ""
    },
    governor: { quorum: govQuorum || "n/a" },
    erc721: nft,
  };

  // eslint-disable-next-line no-console
  console.table(report as any);
  // Also write a JSON artifact for the /health page
  const fs = await import("fs");
  fs.mkdirSync(".audit", { recursive: true });
  fs.writeFileSync(".audit/dao-report.json", JSON.stringify(report, null, 2));
  fs.writeFileSync("public/dao-report.json", JSON.stringify(report, null, 2));
}

ping().catch((e) => { console.error(e); process.exit(1); });

