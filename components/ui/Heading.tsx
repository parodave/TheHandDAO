import { ReactNode } from "react";
export function H1({ children }: { children: ReactNode }) {
  return <h1 className="text-5xl font-bold mb-2">{children}</h1>;
}
export function Subtle({ children }: { children: ReactNode }) {
  return <p className="text-sm text-[var(--muted)]">{children}</p>;
}
