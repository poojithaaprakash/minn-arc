import { notFound } from "next/navigation";
import Image from "next/image";
import { getProductById } from "@/lib/products";

type Props = { params: { id: string } };

export async function generateStaticParams() {
  // For now, static generation is driven by reading JSON at build time
  const { getAllProducts } = await import("@/lib/products");
  const products = await getAllProducts();
  return products.map((p) => ({ id: p.id }));
}

export default async function ProductPage({ params }: Props) {
  const product = await getProductById(params.id);
  if (!product) return notFound();

  const igHandle = process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="relative aspect-square bg-[#F8F4F9] rounded-xl overflow-hidden">
          <Image
            src={product.images?.[0] || "/images/products/placeholder.jpg"}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#666666] mb-2">
            {product.category.replace("-", " ")}
          </p>
          <h1 className="text-3xl font-serif text-[#2D2D2D] mb-3">
            {product.name}
          </h1>
          <p className="text-lg font-medium text-[#2D2D2D] mb-4">
            ₹{product.price}
          </p>
          <p className="text-sm text-[#666666] mb-4">
            {product.description}
          </p>
          <p className="text-sm mb-2">
            <span className="font-medium">
              {product.inStock ? "In stock" : "Currently made to order"}
            </span>
          </p>

          {product.colors && product.colors.length > 0 && (
            <div className="mb-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[#666666] mb-2">
                Available colours
              </p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((c) => (
                  <span
                    key={c}
                    className="text-xs border border-brand-accent px-3 py-1 rounded-full text-[#666666]"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href={`https://ig.me/m/${igHandle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5A3964] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#7B5285] transition-colors"
            >
              Order via Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
