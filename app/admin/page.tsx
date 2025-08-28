export default function AdminPage(){
  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-5xl font-bold mb-3">Admin</h1>
      <p className="mb-6">Only admin addresses can view this page.</p>
      <div className="grid gap-4">
        <div className="border p-4"><h2 className="font-semibold">Proposals (stub)</h2><p className="text-sm">Create, edit, publish. Coming soon.</p></div>
        <div className="border p-4"><h2 className="font-semibold">Members (stub)</h2><p className="text-sm">List of requests from /join. Integrate DB later.</p></div>
      </div>
    </main>
  );
}

