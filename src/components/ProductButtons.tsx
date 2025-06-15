
import { Button } from "@/components/ui/button";
import { ShoppingCart, Calendar } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { useCartWishlist } from "@/store/CartWishlistContext";

interface ProductButtonsProps {
  product: {
    id: number;
    name: string;
    price: number;
    rentalPrice: number | null;
    originalPrice: number | null;
    isRentable: boolean;
  };
}

export function ProductButtons({ product }: ProductButtonsProps) {
  const { addToCart, isInCart } = useCartWishlist();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-2 sm:gap-3 mt-4 w-full">
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full">
        {/* Add to Cart */}
        <Button
          className="flex-1 min-w-0 font-bold px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-gray-900 text-white shadow-lg border-none
              hover:bg-gray-800 active:scale-95 transition-all duration-200 text-sm sm:text-base btn-animate
              tracking-wide drop-shadow-md ring-2 ring-transparent hover:ring-gray-600"
          onClick={(e) => {
            e.stopPropagation();
            if (!isInCart(product.id)) {
              addToCart(product.id);
              toast({
                title: "Cart mein dala gaya!",
                description: product.name,
              });
            } else {
              toast({
                title: "Product pehlay se cart mein hai",
                description: product.name,
              });
            }
          }}
          disabled={isInCart(product.id)}
          size="sm"
        >
          <ShoppingCart className="mr-2 h-5 w-5" />
          {isInCart(product.id) ? "Cart Mein Hai" : "Add to Cart"}
        </Button>

        {/* Buy Now */}
        <Button
          className="flex-1 min-w-0 font-bold px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-white text-gray-900 border-2 border-gray-900
              shadow-lg hover:bg-gray-100 active:scale-95 transition-all duration-200 text-sm sm:text-base btn-animate
              tracking-wide drop-shadow-md ring-2 ring-transparent hover:ring-gray-800"
          variant="default"
          onClick={(e) => {
            e.stopPropagation();
            if (!isInCart(product.id)) addToCart(product.id);
            navigate('/cart');
          }}
          size="sm"
        >
          <ShoppingCart className="mr-2 h-5 w-5" />
          Buy Now
        </Button>
      </div>
      {/* Rent */}
      <div className="mt-2">
        {product.isRentable ? (
          <Button
            variant="outline"
            className="w-full font-semibold text-sm sm:text-base px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl
                transition-all duration-200 bg-gray-100 text-gray-900 border-2 border-gray-400
                hover:bg-gray-200 hover:border-gray-700 shadow btn-animate active:scale-95"
            onClick={(e) => {
              e.stopPropagation();
              toast({
                title: "Rent feature jald aa raha hai",
                description: product.name,
              });
            }}
            size="sm"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Rent ({product.rentalPrice ? `$${product.rentalPrice}/day` : '-'})
          </Button>
        ) : (
          <Button
            variant="outline"
            disabled
            className="w-full bg-gray-100 text-gray-400 border-gray-300 text-sm sm:text-base px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl"
            size="sm"
          >
            Not for Rent
          </Button>
        )}
      </div>
    </div>
  );
}

