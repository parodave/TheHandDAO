export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-6 text-sm flex items-center justify-between">
        <span>© 2025 The Hand DAO</span>
        <nav className="flex gap-4">
          <a href="#faq" className="hover:underline">
            Docs
          </a>
          <a href="#dao" className="hover:underline">
            Dashboard
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
          <a href="#legal" className="hover:underline">
            Mentions
          </a>
        </nav>
      </div>
    </footer>
  );
}
