import { notFound } from "next/navigation";
import { getCategoryBySlug, getProductsByCategory, getAllCategories } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories.map((c) => ({ slug: c.slug }));
}

export default async function CategoryPage({ params }: Props) {
  const category = await getCategoryBySlug(params.slug);
  if (!category) return notFound();
  const products = await getProductsByCategory(params.slug);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <header className="mb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-[#666666] mb-2">
          Category
        </p>
        <h1 className="text-3xl font-serif text-[#2D2D2D] mb-2">
          {category.name}
        </h1>
        <p className="text-sm text-[#666666] max-w-2xl">
          {category.description}
        </p>
      </header>

      {products.length === 0 ? (
        <p className="text-[#666666] text-sm">No products in this category yet.</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
