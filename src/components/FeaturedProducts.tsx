import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, ShoppingCart, Calendar } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Handwoven Wall Art',
    category: 'Home Decor',
    price: 25,
    rentalPrice: 8,
    originalPrice: null,
    isNew: true,
    isRentable: true,
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
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=500&fit=crop'
  },
  {
    id: 6,
    name: 'Organic Skincare Set',
    category: 'Health and Beauty',
    price: 79,
    rentalPrice: null,
    originalPrice: null,
    isNew: false,
    isRentable: false,
    image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=500&fit=crop'
  }
];

export function FeaturedProducts() {
  // Wishlist state demonstration (would be global/context in real app)
  const [wishlist, setWishlist] = useState<Set<number>>(new Set());

  const toggleWishlist = (id: number) => {
    setWishlist(prev => {
      const copy = new Set(prev);
      if (copy.has(id)) copy.delete(id);
      else copy.add(id);
      return copy;
    });
  };

  return (
    <section className="py-20 bg-[#F8F8F8]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="uppercase tracking-wider text-sm font-medium text-[#555]">
            Featured Collection
          </p>
          <h2 className="h2">
            Discover Local Treasures
          </h2>
          <p className="subtitle max-w-2xl mx-auto">
            Explore our curated selection of unique local products available for purchase or rent from verified creators in your community.
          </p>
        </div>
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <Card key={product.id} className="marketplace-card card-hover overflow-hidden border-0 bg-white">
              {/* Product Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Badges */}
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
                {/* Wishlist Icon */}
                <button
                  className={`absolute top-4 right-4 h-9 w-9 flex items-center justify-center rounded-full shadow-md transition-colors duration-200 bg-white/90 ${
                    wishlist.has(product.id) ? 'ring-2 ring-[#F44336]' : ''
                  }`}
                  aria-label={wishlist.has(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
                  onClick={() => toggleWishlist(product.id)}
                >
                  <Heart
                    className={`h-5 w-5 text-[#F44336] transition-all duration-200 ${
                      wishlist.has(product.id) ? 'fill-[#F44336]' : ''
                    }`}
                    fill={wishlist.has(product.id) ? '#F44336' : 'none'}
                  />
                </button>
                {/* Action Buttons */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 space-y-2">
                  <Button className="w-full btn-primary shadow-lg btn-animate">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Buy Now
                  </Button>
                  {product.isRentable && (
                    <Button variant="outline" className="w-full btn-outline shadow-lg btn-animate">
                      <Calendar className="mr-2 h-4 w-4" />
                      Rent (${product.rentalPrice}/day)
                    </Button>
                  )}
                </div>
              </div>
              {/* Product Info */}
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
          ))}
        </div>
        {/* View All Button */}
        <div className="text-center flex flex-col sm:flex-row justify-center gap-4">
          <Button
            variant="outline"
            size="lg"
            className="btn-outline hover:bg-[#222] hover:text-white hover:border-[#222] transition-all duration-200"
            onClick={() => window.location.href = "/products"}
          >
            Browse Products
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="btn-outline hover:bg-[#4CAF50] hover:text-white hover:border-[#4CAF50] transition-all duration-200"
            onClick={() => window.location.href = "/nadra-verification"}
          >
            Identity
          </Button>
        </div>
      </div>
    </section>
  );
}
