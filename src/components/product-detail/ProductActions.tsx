
import React from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useCartWishlist } from "@/store/CartWishlistContext";
import { toast } from "@/hooks/use-toast";

interface ProductActionsProps {
  productId: number;
  productName: string;
  productPrice: number;
  isRentable: boolean;
  rentalPrice: number;
}

export function ProductActions({ productId, productName, productPrice, isRentable, rentalPrice }: ProductActionsProps) {
  const { addToCart, isInCart, wishlistToggle, isWishlisted } = useCartWishlist();

  return (
    <div className="flex gap-4">
      <Button
        className="marketplace-button flex-1"
        onClick={() => {
          if (!isInCart(productId)) {
            addToCart(productId);
            toast({ title: "Added to cart", description: productName });
          } else {
            toast({ title: "Product already in cart", description: productName });
          }
        }}
        disabled={isInCart(productId)}
      >
        {isInCart(productId)
          ? `In Cart`
          : `Buy Now - $${productPrice}`}
      </Button>
      {isRentable && (
        <Button className="marketplace-button flex-1">
          Rent Now
        </Button>
      )}
      <Button
        variant={isWishlisted(productId) ? "default" : "outline"}
        size="icon"
        className={`border-gray-300 hover:bg-gray-100 ${isWishlisted(productId) ? "ring-2 ring-[#F44336]" : ""}`}
        onClick={() => {
          wishlistToggle(productId);
          toast({
            title: isWishlisted(productId) ? "Removed from Wishlist" : "Added to Wishlist",
            description: productName,
          });
        }}
        aria-label={isWishlisted(productId) ? 'Remove from wishlist' : 'Add to wishlist'}
      >
        <Heart className={`h-4 w-4 ${isWishlisted(productId) ? "fill-[#F44336] text-[#F44336]" : ""}`} fill={isWishlisted(productId) ? '#F44336' : 'none'} />
      </Button>
    </div>
  )
}
