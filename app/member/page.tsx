export default function MemberPage(){
  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-5xl font-bold mb-3">Members</h1>
      <p className="mb-6">You have access because your browser holds a valid token.</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Private roadmap</li>
        <li>Downloads</li>
        <li>Early proposals</li>
      </ul>
    </main>
  );
}

