import React, { useState } from "react";
import { Plus, Check } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
}) => {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    onAddToCart?.(product);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <article
      className="group relative flex flex-col justify-between w-[220px] sm:w-[240px] md:w-[260px] shrink-0 snap-start bg-[#F5E9D5] text-[#200D0B] p-3 rounded-[3px] shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      style={{ aspectRatio: "2 / 3" }}
    >
      {/* Top Left: Outlined Category Tag */}
      <div className="flex items-start justify-between">
        <span className="inline-block text-[0.625rem] font-sans font-medium uppercase tracking-[0.12em] px-2 py-0.5 border border-[#200D0B]/30 rounded-full text-[#200D0B]/80">
          {product.category}
        </span>
      </div>

      {/* Centred Isolated Jewellery Photo */}
      <div className="flex-1 flex items-center justify-center p-2 my-2 overflow-hidden">
        <img
          src={product.image}
          alt={product.alt}
          width={300}
          height={300}
          loading="lazy"
          className="max-h-[150px] w-auto object-contain transition-transform duration-500 group-hover:scale-108 drop-shadow-[0_8px_12px_rgba(32,13,11,0.15)]"
        />
      </div>

      {/* Bottom Area: Name, Price, and Plus Button */}
      <div className="pt-2 border-t border-[#200D0B]/10 flex items-end justify-between">
        <div className="flex flex-col pr-2">
          <h3 className="font-sans font-medium text-[0.8rem] text-[#200D0B] leading-snug line-clamp-1">
            {product.name}
          </h3>
          <span className="font-sans font-normal text-[0.75rem] text-[#200D0B]/70 mt-0.5">
            {product.price}
          </span>
        </div>

        {/* Tiny "+" Icon Button */}
        <button
          type="button"
          onClick={handleAdd}
          aria-label={`Add ${product.name} to cart`}
          className={`w-7 h-7 rounded-[2px] flex items-center justify-center border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold shrink-0 ${
            added
              ? "bg-[#200D0B] text-[#F5E9D5] border-[#200D0B]"
              : "border-[#200D0B]/25 text-[#200D0B] hover:bg-[#200D0B] hover:text-[#F5E9D5]"
          }`}
        >
          {added ? (
            <Check className="w-3.5 h-3.5" />
          ) : (
            <Plus className="w-3.5 h-3.5" />
          )}
        </button>
      </div>
    </article>
  );
};
