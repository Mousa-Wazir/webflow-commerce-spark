
import { ShoppingCart } from "lucide-react";
import { ProductData } from "./ProductCardList";
import { useState } from "react";

export function ProductCard({ product }: { product: ProductData }) {
  const [added, setAdded] = useState(false);

  return (
    <div
      className="bg-white border border-gray-200 rounded-2xl shadow-lg flex flex-col overflow-hidden animate-fade-in"
      style={{
        transition: "transform 0.25s cubic-bezier(.4,0,.2,1), box-shadow 0.25s",
        minHeight: 360,
      }}
    >
      {/* Image */}
      <div className="w-full h-48 overflow-hidden flex items-center justify-center bg-gray-100 group">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      {/* Info */}
      <div className="flex-1 flex flex-col p-4 gap-2">
        <div>
          <div className="text-xs text-gray-500 font-medium">{product.category}</div>
          <div className="font-bold text-lg text-gray-900 mb-1">{product.title}</div>
        </div>
        <div className="flex gap-2 items-center">
          <span className="font-semibold text-black text-base">${product.price}</span>
          <span className="text-yellow-500 font-medium text-sm">
            {"★".repeat(Math.round(product.rating))}<span className="text-gray-400 text-xs"> ({product.rating})</span>
          </span>
        </div>
        <button
          disabled={added}
          onClick={() => setAdded(true)}
          className={`mt-2 w-full flex items-center justify-center gap-2 py-2 rounded-xl font-bold transition-all duration-200
            ${added
              ? "bg-gray-300 text-gray-500"
              : "bg-green-500 hover:bg-green-600 active:bg-green-700 text-white hover:scale-105 active:scale-95 shadow-lg border-2 border-white"}
            `}
          tabIndex={0}
          aria-label={added ? 'Already in cart' : 'Add to cart'}
          style={{ minHeight: 48 }}
        >
          <span className="flex items-center gap-2">
            <span className={`flex items-center justify-center ${added ? "" : "drop-shadow-lg"}`}>
              <ShoppingCart
                size={22}
                className={`${
                  added
                    ? "text-gray-400"
                    : "text-white"
                }`}
              />
            </span>
            {added ? "Added" : "Add to Cart"}
          </span>
        </button>
      </div>
    </div>
  )
}

