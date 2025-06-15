
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useCartWishlist } from "@/store/CartWishlistContext";
import { useNavigate } from "react-router-dom";
import { ProductBadges } from "./ProductBadges";
import { ProductButtons } from "./ProductButtons";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    category: string;
    price: number;
    rentalPrice: number | null;
    originalPrice: number | null;
    isNew: boolean;
    isRentable: boolean;
    isVerified: boolean;
    description: string;
    image: string;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  const { wishlistToggle, isWishlisted } = useCartWishlist();
  const navigate = useNavigate();

  return (
    <Card
      className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white relative rounded-2xl min-h-[410px] flex flex-col"
    >
      {/* Product Image & Card Main Click Area */}
      <div
        className="relative aspect-square overflow-hidden cursor-pointer sm:rounded-t-xl"
        onClick={() => navigate(`/products/${product.id}`)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <ProductBadges
          isNew={product.isNew}
          originalPrice={product.originalPrice}
          isRentable={product.isRentable}
          isVerified={product.isVerified}
        />
      </div>

      {/* Favorite/Wishlist Icon */}
      <Button
        size="icon"
        variant="ghost"
        onClick={(e) => {
          e.stopPropagation();
          wishlistToggle(product.id);
          toast({
            title: isWishlisted(product.id)
              ? "Removed from Wishlist"
              : "Added to Wishlist",
            description: product.name,
          });
        }}
        aria-label={isWishlisted(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
        className={`absolute top-2 right-2 z-10 rounded-full bg-white/90 hover:bg-red-50 border shadow ${isWishlisted(product.id) ? "ring-2 ring-red-500" : ""}`}
      >
        <Heart
          className={`h-5 w-5 transition-all ${isWishlisted(product.id) ? "fill-red-600 text-red-600" : "text-gray-500"}`}
          fill={isWishlisted(product.id) ? "#EF4444" : "none"}
        />
      </Button>

      {/* Product Info */}
      <div className="flex flex-col justify-between flex-1 p-3 md:p-4 space-y-2 min-h-[160px]">
        <div>
          <button
            className="text-xs sm:text-sm text-gray-500 font-medium hover:underline"
            onClick={() => navigate(`/products/${product.id}`)}
          >
            {product.category}
          </button>
          <h3
            className="font-semibold text-base md:text-lg text-gray-900 line-clamp-1 mt-1 mb-1 cursor-pointer hover:underline"
            onClick={() => navigate(`/products/${product.id}`)}
          >
            {product.name}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">{product.description}</p>
        </div>
        <div className="flex items-center gap-2 text-sm md:text-base">
          <span className="font-bold text-gray-900">${product.price}</span>
          {product.originalPrice && (
            <span className="text-gray-500 line-through">${product.originalPrice}</span>
          )}
          {product.isRentable && (
            <span className="text-xs md:text-sm text-blue-600">• ${product.rentalPrice}/day rent</span>
          )}
        </div>
        <ProductButtons product={product} />
      </div>
    </Card>
  );
}
