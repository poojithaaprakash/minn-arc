import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/products";

type Props = { product: Product };

export default function ProductCard({ product }: Props) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="group border border-brand-accent/40 rounded-xl overflow-hidden bg-white hover:shadow-md transition-all flex flex-col"
    >
      <div className="relative aspect-square bg-[#F8F4F9]">
        <Image
          src={product.images?.[0] || "/images/products/placeholder.jpg"}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-medium text-[#2D2D2D] text-sm">
            {product.name}
          </h3>
          <span className="text-sm font-semibold text-[#2D2D2D] whitespace-nowrap">
            ₹{product.price}
          </span>
        </div>
        <p className="text-xs text-[#666666] line-clamp-2 mb-3">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className={`text-[11px] uppercase tracking-[0.16em] ${product.inStock ? "text-emerald-600" : "text-amber-700"}`}>
            {product.inStock ? "In stock" : "Made to order"}
          </span>
        </div>
      </div>
    </Link>
  );
}
