export const ADDR = {
  GOVERNOR: (process.env.NEXT_PUBLIC_GOVERNOR_ADDRESS||"") as `0x${string}`,
  TREASURY: (process.env.NEXT_PUBLIC_TREASURY_ADDRESS||"") as `0x${string}`,
  ERC721:   (process.env.NEXT_PUBLIC_ERC721_ADDRESS||"")   as `0x${string}`,
  ERC20:    (process.env.NEXT_PUBLIC_ERC20_ADDRESS||"")    as `0x${string}`,
  SNAPSHOT: process.env.NEXT_PUBLIC_SNAPSHOT_SPACE || "",
};

