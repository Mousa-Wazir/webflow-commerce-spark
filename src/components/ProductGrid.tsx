import { useNavigate } from "react-router-dom";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingCart, Calendar } from 'lucide-react';
import { useCartWishlist } from '@/store/CartWishlistContext';
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { ProductCard } from "./ProductCard";

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
          <ProductCard key={product.id} product={product} />
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
