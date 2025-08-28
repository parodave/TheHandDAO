export default function TableMinimal() {
  const rows = [
    { date: '2025-08-01', action: 'mint', amt: '$999' },
    { date: '2025-08-02', action: 'distribute', amt: '$450' },
  ];
  return (
    <div className="border p-4">
      <div className="smallcaps">Historique</div>
      <table className="w-full mt-3 text-sm">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2">Date</th>
            <th className="text-left">Action</th>
            <th className="text-left">Montant</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.date} className="border-b">
              <td className="py-2">{r.date}</td>
              <td>{r.action}</td>
              <td>{r.amt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
