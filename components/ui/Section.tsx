import { ReactNode } from "react";
export default function Section({ title, children, className="" }: { title?: string; children: ReactNode; className?: string }) {
  return (
    <section className={`mx-auto max-w-6xl px-6 ${className}`}>
      {title ? <h2 className="text-xl font-semibold mb-3">{title}</h2> : null}
      {children}
    </section>
  );
}
