export default function PatternsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <header className="mb-8 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-[#666666] mb-2">
          Patterns
        </p>
        <h1 className="text-3xl font-serif text-[#2D2D2D] mb-3">
          Crochet patterns by Minn Arc.
        </h1>
        <p className="text-sm text-[#666666]">
          This space is reserved for your digital patterns. You can later add pattern cards here with links to PDFs, pricing, and usage notes. For now, treat this as a coming-soon section.
        </p>
      </header>
      <div className="border border-dashed border-brand-accent rounded-xl p-8 text-center text-sm text-[#666666] bg-[#F8F4F9]/40">
        Patterns will be listed here as your collection grows. You’ll be able to manage them from the admin panel, just like regular products.
      </div>
    </div>
  );
}
