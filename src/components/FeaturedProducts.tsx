
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Minimalist Coat',
    category: 'Outerwear',
    price: 459,
    originalPrice: null,
    isNew: true,
  },
  {
    id: 2,
    name: 'Classic Dress',
    category: 'Dresses',
    price: 299,
    originalPrice: 399,
    isNew: false,
  },
  {
    id: 3,
    name: 'Urban Sneakers',
    category: 'Footwear',
    price: 189,
    originalPrice: null,
    isNew: false,
  },
  {
    id: 4,
    name: 'Silk Blouse',
    category: 'Tops',
    price: 199,
    originalPrice: null,
    isNew: true,
  },
  {
    id: 5,
    name: 'Tailored Pants',
    category: 'Bottoms',
    price: 249,
    originalPrice: 329,
    isNew: false,
  },
  {
    id: 6,
    name: 'Leather Bag',
    category: 'Accessories',
    price: 349,
    originalPrice: null,
    isNew: false,
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-muted-foreground uppercase tracking-wider text-sm font-medium">
            Featured Collection
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Trending Now
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our most popular pieces, carefully selected for their exceptional quality and contemporary appeal.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Product Image */}
              <div className="relative aspect-[3/4] bg-muted overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/10 flex items-center justify-center">
                  <div className="text-muted-foreground font-medium">{product.name}</div>
                </div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 space-y-2">
                  {product.isNew && (
                    <span className="bg-foreground text-background px-3 py-1 text-xs font-medium rounded-full">
                      NEW
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="bg-destructive text-destructive-foreground px-3 py-1 text-xs font-medium rounded-full">
                      SALE
                    </span>
                  )}
                </div>

                {/* Hover Actions */}
                <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="icon" variant="secondary" className="h-8 w-8">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>

                {/* Add to Cart Button */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <Button className="w-full">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">{product.category}</p>
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-muted-foreground line-through">${product.originalPrice}</span>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
