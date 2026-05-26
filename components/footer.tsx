export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-2xl px-6 sm:px-8 py-10 flex flex-col sm:flex-row gap-3 sm:gap-0 sm:items-center sm:justify-between font-mono text-[0.7rem] uppercase tracking-[0.18em] text-subtle">
        <span>© {year} Alexander De Los Santos</span>
        <span>Built in Miami · Next.js</span>
      </div>
    </footer>
  );
}
