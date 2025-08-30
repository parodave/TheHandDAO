// ABI minimale avec fonction mint(uint256)
export const abi = [
  {
    "type": "function",
    "name": "mint",
    "stateMutability": "payable",
    "inputs": [{ "name": "quantity", "type": "uint256" }],
    "outputs": []
  }
] as const;
