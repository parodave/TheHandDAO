"use client";
export async function tokenStatus(){ const r=await fetch("/api/token/status",{cache:"no-store"}); return r.json(); }
export async function tokenIssue(address: string){
  const r = await fetch("/api/token/issue",{ method:"POST", headers:{ "content-type":"application/json" }, body: JSON.stringify({ address }) });
  return r.ok;
}
export async function tokenLogout(){ await fetch("/api/token/logout",{ method:"POST" }); }

