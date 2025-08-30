export function useVotes() {
  // historique compact
  const history = [
    { date: "2025-08-28", action: "Mint C-01", amount: "$999" },
    { date: "2025-08-27", action: "Distribution C-01", amount: "$1,200" },
    { date: "2025-08-26", action: "Vote P-001", amount: "Oui" },
  ];
  return { history };
}
