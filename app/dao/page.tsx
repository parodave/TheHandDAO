export const metadata = {
  title: "DAO — The Hand",
  description: "DAO dashboard placeholder.",
};

const cards = [
  { title: "Members", value: "—", note: "Coming soon" },
  { title: "Treasury", value: "—", note: "Coming soon" },
  { title: "Proposals", value: "—", note: "Coming soon" },
];

export default function DaoPage() {
  return (
    <section className="container py-16">
      <h1 className="text-3xl md:text-4xl font-bold">DAO Dashboard</h1>
      <p className="subtle mt-2">Basic overview. Live data will be added later.</p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {cards.map((c) => (
          <div key={c.title} className="border border-black p-6">
            <div className="text-sm opacity-70">{c.title}</div>
            <div className="text-3xl font-extrabold mt-2">{c.value}</div>
            <div className="subtle mt-2">{c.note}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

