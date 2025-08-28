export default function Badge({ children }: { children: string }) {
  return <span className="border px-2 py-1 text-xs">{children}</span>;
}
