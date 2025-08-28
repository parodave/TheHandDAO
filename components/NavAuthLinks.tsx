"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { tokenStatus, tokenLogout } from "@/lib/tokenClient";

export default function NavAuthLinks(){
  const [ok, setOk] = useState(false);
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    tokenStatus().then((r:any)=>{ setOk(!!r.ok); setAdmin(!!r.admin); }).catch(()=>{});
  }, []);
  return (
    <div className="flex items-center gap-3">
      {ok && <Link href="/member" className="border px-2 py-1 text-xs">Member Area</Link>}
      {admin && <Link href="/admin" className="border px-2 py-1 text-xs">Admin</Link>}
      {ok && <button onClick={()=>tokenLogout().then(()=>location.reload())} className="text-xs underline">Sign out</button>}
    </div>
  );
}

