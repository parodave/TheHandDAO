export default function StatCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="border p-4">
      <div className="smallcaps">{title}</div>
      <div className="text-3xl mt-2">{value}</div>
    </div>
  );
}
