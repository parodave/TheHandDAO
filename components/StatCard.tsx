"use client";
type Props = { title: string; value: string };
export default function StatCard({ title, value }: Props) {
  return (
    <div className="border border-neutral-200 p-5">
      <div className="text-xs uppercase tracking-wider">{title}</div>
      <div className="text-3xl mt-2">{value}</div>
    </div>
  );
}
