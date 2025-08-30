"use client";
type Props = { columns: string[]; rows: (string | number)[][] };
export default function TableMinimal({ columns, rows }: Props) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-neutral-200">
            {columns.map((c) => (
              <th key={c} className="text-left text-sm py-3">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-neutral-200">
              {r.map((cell, j) => (
                <td key={j} className="py-3 text-sm">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
