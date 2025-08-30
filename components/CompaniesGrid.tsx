"use client";
const companies = [
  { id: "C-01", name: "C-01", status: "Actif" },
  { id: "C-02", name: "C-02", status: "À venir" },
  { id: "C-03", name: "C-03", status: "À venir" },
  { id: "C-04", name: "C-04", status: "À venir" },
  { id: "C-05", name: "C-05", status: "À venir" },
];
export default function CompaniesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {companies.map((c) => (
        <a key={c.id} href={`/company/${c.id}`} className="block border border-neutral-200 p-4 group">
          <div className="aspect-[4/3] bg-neutral-100"></div>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-sm">{c.name}</span>
            <span className="text-xs uppercase tracking-wide">{c.status}</span>
          </div>
          <div className="mt-1 text-base group-hover:underline">+</div>
        </a>
      ))}
    </div>
  );
}
