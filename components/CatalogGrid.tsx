export default function CatalogGrid() {
  const items = [1, 2, 3, 4, 5].map((i) => ({
    code: `C-0${i}`,
    name: `Company ${i}`,
  }));
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {items.map((it) => (
        <a
          key={it.code}
          className="border aspect-[4/3] flex flex-col items-center justify-center hover:opacity-80"
        >
          <div className="w-3/4 h-2/3 border bg-neutral-100" />
          <div className="mt-3 text-sm">{it.code}</div>
        </a>
      ))}
    </div>
  );
}
