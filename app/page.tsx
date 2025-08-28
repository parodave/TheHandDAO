export const metadata = {
  title: "The Hand — DAO",
  description: "Minimalist black & white UI, community governance.",
};

export default function Page() {
  return (
    <section className="container py-16 md:py-24">
      <h1 className="heading-hero">The Hand — DAO</h1>
      <p className="subtle mt-4">Minimalist black &amp; white UI, community governance.</p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href="/dao" className="btn btn-primary">Join DAO</a>
        <a href="/legal" className="btn">Learn More</a>
      </div>

      <hr className="my-12" />

      <div className="grid md:grid-cols-3 gap-6">
        <div className="border border-black p-6">
          <h3 className="font-semibold text-lg">Transparent</h3>
          <p className="subtle mt-2">Open governance with clear rules.</p>
        </div>
        <div className="border border-black p-6">
          <h3 className="font-semibold text-lg">Composable</h3>
          <p className="subtle mt-2">Start simple, extend safely.</p>
        </div>
        <div className="border border-black p-6">
          <h3 className="font-semibold text-lg">Monochrome</h3>
          <p className="subtle mt-2">Pure black on white, timeless.</p>
        </div>
      </div>
    </section>
  );
}

