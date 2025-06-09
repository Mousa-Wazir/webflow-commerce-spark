
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingCart, Calendar, Shield } from 'lucide-react';

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
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-900">
          {selectedCategory}
        </h2>
        <p className="text-gray-600">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white">
            {/* Product Image */}
            <div className="relative aspect-square overflow-hidden">
              <img 
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Badges */}
              <div className="absolute top-3 left-3 space-y-1">
                {product.isNew && (
                  <Badge className="bg-green-500 text-white text-xs">
                    NEW
                  </Badge>
                )}
                {product.originalPrice && (
                  <Badge className="bg-red-500 text-white text-xs">
                    SALE
                  </Badge>
                )}
                {product.isRentable && (
                  <Badge className="bg-blue-500 text-white text-xs">
                    RENTABLE
                  </Badge>
                )}
              </div>

              {/* Verification Badge */}
              {product.isVerified && (
                <div className="absolute top-3 right-3">
                  <Badge className="bg-green-600 text-white text-xs flex items-center gap-1">
                    <Shield className="h-3 w-3" />
                    VERIFIED
                  </Badge>
                </div>
              )}

              {/* Hover Actions */}
              <div className="absolute top-3 right-3 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {!product.isVerified && (
                  <Button size="icon" variant="secondary" className="h-8 w-8 bg-white/90 hover:bg-white">
                    <Heart className="h-4 w-4 text-gray-700" />
                  </Button>
                )}
              </div>

              {/* Action Buttons */}
              <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 space-y-2">
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Buy Now
                </Button>
                {product.isRentable ? (
                  <Button variant="outline" className="w-full bg-white/90 hover:bg-white border-gray-900 text-gray-900">
                    <Calendar className="mr-2 h-4 w-4" />
                    Rent (${product.rentalPrice}/day)
                  </Button>
                ) : (
                  <Button variant="outline" disabled className="w-full bg-gray-100 text-gray-400 border-gray-300">
                    Not for Rent
                  </Button>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="p-4 space-y-3">
              <div>
                <p className="text-sm text-gray-500 font-medium">{product.category}</p>
                <h3 className="font-semibold text-lg text-gray-900 line-clamp-1">{product.name}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-gray-900">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-gray-500 line-through text-sm">${product.originalPrice}</span>
                )}
                {product.isRentable && (
                  <span className="text-sm text-blue-600">• ${product.rentalPrice}/day rent</span>
                )}
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
