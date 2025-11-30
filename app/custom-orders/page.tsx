import CustomOrderForm from "@/components/CustomOrderForm";

export default function CustomOrdersPage() {
  const igHandle = process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <header className="mb-8 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-[#666666] mb-2">
          Custom orders
        </p>
        <h1 className="text-3xl font-serif text-[#2D2D2D] mb-3">
          Let’s crochet your idea.
        </h1>
        <p className="text-sm text-[#666666]">
          Share a reference picture, colour preferences, and any details you have in mind. You’ll receive a response with possibilities, timelines, and pricing.
        </p>
      </header>

      <CustomOrderForm />

      <p className="text-xs text-[#666666] mt-6 text-center">
        Prefer Instagram? Send a message with your reference image to{" "}
        <a
          href={`https://instagram.com/${igHandle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2D2D2D] underline underline-offset-2"
        >
          @{igHandle}
        </a>.
      </p>
    </div>
  );
}
