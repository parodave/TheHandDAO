export default function Footer() {
  return (
    <footer className="border-t border-black mt-20">
      <div className="container py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <p className="subtle">© 2025 The Hand DAO — All rights reserved.</p>
        <div className="flex gap-4">
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="btn">Twitter</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="btn">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

