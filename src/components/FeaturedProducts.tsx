
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
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="uppercase tracking-wider text-sm font-medium text-amber-600">
            Featured Collection
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Discover Local Treasures
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Explore our curated selection of unique local products available for purchase or rent from verified creators in your community.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 bg-white">
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
                    <span className="bg-emerald-500 text-white px-3 py-1 text-xs font-medium rounded-full shadow-lg">
                      NEW
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="bg-red-500 text-white px-3 py-1 text-xs font-medium rounded-full shadow-lg">
                      SALE
                    </span>
                  )}
                  {product.isRentable && (
                    <span className="bg-blue-500 text-white px-3 py-1 text-xs font-medium rounded-full shadow-lg">
                      RENTABLE
                    </span>
                  )}
                </div>

                {/* Hover Actions */}
                <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="icon" variant="secondary" className="h-8 w-8 bg-white/90 hover:bg-white shadow-md">
                    <Heart className="h-4 w-4 text-slate-700" />
                  </Button>
                </div>

                {/* Action Buttons */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 space-y-2">
                  <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white shadow-lg">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Buy Now
                  </Button>
                  {product.isRentable && (
                    <Button variant="outline" className="w-full bg-white/90 hover:bg-white border-slate-300 text-slate-900 shadow-lg">
                      <Calendar className="mr-2 h-4 w-4" />
                      Rent (${product.rentalPrice}/day)
                    </Button>
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-3">
                <div>
                  <p className="text-sm text-amber-600 font-medium">{product.category}</p>
                  <h3 className="font-semibold text-lg text-slate-900">{product.name}</h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg text-slate-900">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-slate-500 line-through">${product.originalPrice}</span>
                  )}
                  {product.isRentable && (
                    <span className="text-sm text-blue-600">• ${product.rentalPrice}/day rent</span>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-slate-300 text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-200"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
