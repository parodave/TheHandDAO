// Server Component (pas de "use client")
import Link from "next/link";

export default function LangSwitcher() {
  return (
    <div className="text-sm">
      <Link className="hover:underline" href="/fr">FR</Link>
      {" | "}
      <Link className="hover:underline" href="/en">EN</Link>
    </div>
  );
}
