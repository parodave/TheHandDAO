export default function ActionsPanel() {
  return (
    <div className="border p-4">
      <div className="smallcaps">Actions</div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {['register', 'join', 'mint', 'distribute', 'vote'].map((a) => (
          <button key={a} className="btn">
            {a}
          </button>
        ))}
      </div>
    </div>
  );
}
