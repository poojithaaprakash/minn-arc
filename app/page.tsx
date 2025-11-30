import Link from "next/link";
import { getAllCategories, getFeaturedProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import CategoryGrid from "@/components/CategoryGrid";

export default async function HomePage() {
  const categories = await getAllCategories();
  const featured = await getFeaturedProducts();

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#F8F4F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.2em] text-xs text-[#666666] mb-4">
              Handcrafted Crochet
            </p>
            <h1 className="text-3xl md:text-5xl font-serif font-semibold text-[#2D2D2D] mb-4 leading-tight">
              Crafted with love, inspired by you.
            </h1>
            <p className="text-[#666666] max-w-md mb-6">
              A minimal collection of handcrafted crochet pieces designed to bring warmth, texture, and a touch of elegance to your everyday moments.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#categories"
                className="bg-[#5A3964] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#7B5285] transition-colors"
              >
                Explore collection
              </Link>
              <a
                href={`https://ig.me/m/${process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-brand-primary text-[#2D2D2D] px-6 py-2 rounded-full text-sm font-medium hover:bg-white hover:shadow-sm transition-all"
              >
                Order via Instagram
              </a>
            </div>
          </div>
          <div className="hidden md:flex justify-end">
            <div className="w-80 h-80 bg-white border border-brand-accent rounded-full shadow-lg flex items-center justify-center">
              <span className="text-[#2D2D2D] font-serif text-xl text-center px-8">
                Minn Arc
                <span className="block text-xs font-sans text-[#666666] mt-2">
                  Crochet pieces with an authentic, premium feel.
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-serif text-[#2D2D2D]">
              Shop by category
            </h2>
          </div>
          <CategoryGrid categories={categories} />
        </div>
      </section>

      {/* Featured */}
      <section className="py-12 md:py-16 bg-[#F8F4F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="text-2xl md:3xl font-serif text-[#2D2D2D]">
              Featured pieces
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* About placeholder */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-[#2D2D2D] mb-4">
            About Minn Arc
          </h2>
          <p className="text-[#666666] text-sm md:text-base leading-relaxed">
            This is a placeholder for your story. You can share how Minn Arc began, what inspires your crochet work, and what makes each handcrafted piece special. Update this text later to reflect your voice and journey.
          </p>
        </div>
      </section>
    </div>
  );
}


