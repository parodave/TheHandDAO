export const metadata = {
  title: "Contact — The Hand",
  description: "Get in touch.",
};

export default function ContactPage() {
  return (
    <section className="container py-16">
      <h1 className="text-3xl md:text-4xl font-bold">Contact</h1>
      <form className="mt-8 max-w-2xl space-y-4">
        <input className="w-full border border-black p-3" placeholder="Name" />
        <input className="w-full border border-black p-3" placeholder="Email" type="email" />
        <textarea className="w-full border border-black p-3" placeholder="Message" rows={6} />
        <button className="btn btn-primary">Send</button>
      </form>
    </section>
  );
}

