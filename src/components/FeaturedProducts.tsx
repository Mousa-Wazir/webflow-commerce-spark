
import React from 'react';
import { Button } from '@/components/ui/button';
import { FeaturedProductCard } from './FeaturedProductCard';
import { FeaturedProductsHeader } from './FeaturedProductsHeader';

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
  return (
    <section className="py-20 bg-[#F8F8F8]">
      <div className="container mx-auto px-4">
        <FeaturedProductsHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <FeaturedProductCard key={product.id} product={product} />
          ))}
        </div>
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
            onClick={() => window.location.href = "/about"}
          >
            Learn About Us
          </Button>
        </div>
      </div>
    </section>
  );
}
