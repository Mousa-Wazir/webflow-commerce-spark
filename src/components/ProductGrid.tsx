import { useNavigate } from "react-router-dom";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingCart, Calendar } from 'lucide-react';
import { useCartWishlist } from '@/store/CartWishlistContext';
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const allProducts = [
  {
    id: 1,
    name: 'Handwoven Wall Art',
    category: 'Home Decor',
    price: 25,
    rentalPrice: 8,
    originalPrice: null,
    isNew: true,
    isRentable: true,
    isVerified: true,
    description: 'Beautiful handcrafted wall art piece',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=500&fit=crop'
  },
  {
    id: 2,
    name: 'Vintage Leather Sofa',
    category: 'Furniture',
    price: 899,
    rentalPrice: 45,
    originalPrice: 1199,
    isNew: false,
    isRentable: true,
    isVerified: true,
    description: 'Comfortable vintage leather sofa',
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=500&fit=crop'
  },
  {
    id: 3,
    name: 'Traditional Embroidered Dress',
    category: 'Clothing',
    price: 159,
    rentalPrice: 25,
    originalPrice: null,
    isNew: false,
    isRentable: true,
    isVerified: true,
    description: 'Elegant traditional dress with embroidery',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=500&fit=crop'
  },
  {
    id: 4,
    name: 'Handcrafted Jewelry Set',
    category: 'Accessories',
    price: 89,
    rentalPrice: null,
    originalPrice: null,
    isNew: true,
    isRentable: false,
    isVerified: true,
    description: 'Unique handmade jewelry collection',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=500&fit=crop'
  },
  {
    id: 5,
    name: 'Ceramic Pottery Collection',
    category: 'Handicrafts',
    price: 199,
    rentalPrice: 15,
    originalPrice: 249,
    isNew: false,
    isRentable: true,
    isVerified: true,
    description: 'Handmade ceramic pottery set',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=500&fit=crop'
  },
  {
    id: 6,
    name: 'Organic Skincare Set',
    category: 'Health & Beauty',
    price: 79,
    rentalPrice: null,
    originalPrice: null,
    isNew: false,
    isRentable: false,
    isVerified: false,
    description: 'Natural organic skincare products',
    image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=500&fit=crop'
  },
  {
    id: 7,
    name: 'Wooden Coffee Table',
    category: 'Furniture',
    price: 299,
    rentalPrice: 20,
    originalPrice: null,
    isNew: true,
    isRentable: true,
    isVerified: true,
    description: 'Solid wood handcrafted coffee table',
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=500&fit=crop'
  },
  {
    id: 8,
    name: 'Designer Handbag',
    category: 'Accessories',
    price: 149,
    rentalPrice: 12,
    originalPrice: 199,
    isNew: false,
    isRentable: true,
    isVerified: true,
    description: 'Premium leather designer handbag',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=500&fit=crop'
  }
];

interface ProductGridProps {
  selectedCategory: string;
}

export function ProductGrid({ selectedCategory }: ProductGridProps) {
  const filteredProducts = selectedCategory === 'All Products'
    ? allProducts
    : allProducts.filter(product => product.category === selectedCategory);

  const { addToCart, isInCart, wishlistToggle, isWishlisted } = useCartWishlist();
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* Results Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
        <h2 className="text-2xl font-semibold text-gray-900">{selectedCategory}</h2>
        <p className="text-gray-600">{filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found</p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
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

              {/* Badges */}
              <div className="absolute top-2 left-2 space-y-1">
                {product.isNew && (
                  <Badge className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">NEW</Badge>
                )}
                {product.originalPrice && (
                  <Badge className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">SALE</Badge>
                )}
                {product.isRentable && (
                  <Badge className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">RENTABLE</Badge>
                )}
              </div>
              {/* Verification Badge */}
              {product.isVerified && (
                <div className="absolute top-2 right-2">
                  <Badge className="bg-green-600 text-white text-xs flex items-center gap-1 px-2 py-0.5 rounded-full">VERIFIED</Badge>
                </div>
              )}
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
              
              {/* Card Buttons Row (Styled/Attractive) */}
              <div className="flex flex-col gap-2 mt-4 w-full">
                <div className="flex flex-row gap-3 w-full">
                  {/* Add to Cart */}
                  <Button
                    className="flex-1 min-w-0 font-bold px-4 py-3 rounded-2xl bg-gray-900 text-white shadow-lg border-none
                    hover:bg-gray-800 active:scale-95 transition-all duration-200 text-base btn-animate
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
                    className="flex-1 min-w-0 font-bold px-4 py-3 rounded-2xl bg-white text-gray-900 border-2 border-gray-900
                    shadow-lg hover:bg-gray-100 active:scale-95 transition-all duration-200 text-base btn-animate
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
                      className="w-full font-semibold text-base px-4 py-2 rounded-xl
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
                      className="w-full bg-gray-100 text-gray-400 border-gray-300 text-base px-4 py-2 rounded-xl"
                      size="sm"
                    >
                      Not for Rent
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-xl mb-2">No products found</div>
          <p className="text-gray-500">Try selecting a different category</p>
        </div>
      )}
    </div>
  );
}
