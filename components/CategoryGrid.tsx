import Link from "next/link";
import Image from "next/image";
import { Category } from "@/lib/products";

type Props = { categories: Category[] };

export default function CategoryGrid({ categories }: Props) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((c) => (
        <Link
          key={c.id}
          href={`/categories/${c.slug}`}
          className="group rounded-xl overflow-hidden border border-brand-accent/40 bg-white hover:shadow-md transition-all flex flex-col"
        >
          <div className="relative h-40 bg-[#F8F4F9]">
            <Image
              src={c.image || "/images/products/placeholder.jpg"}
              alt={c.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform"
            />
          </div>
          <div className="p-4">
            <h3 className="font-serif text-lg text-[#2D2D2D] mb-1">
              {c.name}
            </h3>
            <p className="text-xs text-[#666666]">
              {c.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
