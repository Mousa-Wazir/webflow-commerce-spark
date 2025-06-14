
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, ShoppingCart, Calendar } from 'lucide-react';
import { useCartWishlist } from '@/store/CartWishlistContext';
import { toast } from "@/hooks/use-toast";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rentalPrice: number | null;
  originalPrice: number | null;
  isNew: boolean;
  isRentable: boolean;
  image: string;
}

export function FeaturedProductCard({ product }: { product: Product }) {
  const {
    addToCart,
    isInCart,
    wishlistToggle,
    isWishlisted,
  } = useCartWishlist();

  return (
    <Card className="marketplace-card card-hover overflow-hidden border-0 bg-white">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 space-y-2">
          {product.isNew && (
            <span className="bg-[#4CAF50] text-white px-3 py-1 text-xs font-medium rounded-full shadow-lg">
              NEW
            </span>
          )}
          {product.originalPrice && (
            <span className="bg-[#F44336] text-white px-3 py-1 text-xs font-medium rounded-full shadow-lg">
              SALE
            </span>
          )}
          {product.isRentable && (
            <span className="bg-[#222] text-white px-3 py-1 text-xs font-medium rounded-full shadow-lg">
              RENTABLE
            </span>
          )}
        </div>
        <button
          className={`absolute top-4 right-4 h-9 w-9 flex items-center justify-center rounded-full shadow-md transition-colors duration-200 bg-white/90 ${isWishlisted(product.id) ? 'ring-2 ring-[#F44336]' : ''}`}
          aria-label={isWishlisted(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
          onClick={() => {
            wishlistToggle(product.id);
            toast({
              title: isWishlisted(product.id) ? "Removed from Wishlist" : "Added to Wishlist",
              description: product.name,
            });
          }}
        >
          <Heart
            className={`h-5 w-5 text-[#F44336] transition-all duration-200 ${isWishlisted(product.id) ? 'fill-[#F44336]' : ''}`}
            fill={isWishlisted(product.id) ? '#F44336' : 'none'}
          />
        </button>
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 space-y-2">
          <Button
            className="w-full btn-primary shadow-lg btn-animate"
            onClick={() => {
              if (!isInCart(product.id)) {
                addToCart(product.id);
                toast({
                  title: "Added to cart",
                  description: product.name,
                });
              } else {
                toast({
                  title: "Product already in cart",
                  description: product.name,
                });
              }
            }}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            {isInCart(product.id) ? "In Cart" : "Buy Now"}
          </Button>
          {product.isRentable && (
            <Button variant="outline" className="w-full btn-outline shadow-lg btn-animate">
              <Calendar className="mr-2 h-4 w-4" />
              Rent (${product.rentalPrice}/day)
            </Button>
          )}
        </div>
      </div>
      <div className="p-6 space-y-3">
        <div>
          <p className="text-xs text-[#666] font-medium">{product.category}</p>
          <h3 className="font-bold text-lg text-[#222]">{product.name}</h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg text-[#222]">${product.price}</span>
          {product.originalPrice && (
            <span className="text-[#777] line-through">${product.originalPrice}</span>
          )}
          {product.isRentable && (
            <span className="text-xs text-[#4CAF50]">• ${product.rentalPrice}/day rent</span>
          )}
        </div>
      </div>
    </Card>
  );
}
