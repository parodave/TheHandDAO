export function getAddressKey(addr?: string | null) {
  return addr ? `dao:${addr.toLowerCase()}` : null;
}
export function getVotes(addr?: string | null) {
  const k = getAddressKey(addr);
  if (!k) return {};
  try {
    return JSON.parse(localStorage.getItem(k) || '{}');
  } catch {
    return {};
  }
}
export function setVote(
  addr: string,
  proposalId: string,
  choice: 'yes' | 'no'
) {
  const k = getAddressKey(addr);
  if (!k) return;
  const curr = getVotes(addr);
  curr[proposalId] = choice;
  localStorage.setItem(k, JSON.stringify(curr));
}
export function getVote(addr?: string | null, proposalId?: string) {
  if (!proposalId) return undefined;
  const v = getVotes(addr);
  return v[proposalId];
}
