"use client";
import { useEffect, useState } from "react";
import { getStatus, logout } from "@/lib/siweClient";

export default function MemberBadge() {
  const [member, setMember] = useState<boolean>(false);
  useEffect(() => { getStatus().then(setMember).catch(()=>setMember(false)); }, []);
  if (!member) return null;
  return (
    <div className="flex items-center gap-2">
      <span className="border px-2 py-1 text-xs">Member</span>
      <button className="text-xs underline" onClick={async()=>{await logout(); location.reload();}}>Logout</button>
    </div>
  );
}
