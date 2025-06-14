
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCartWishlist } from '@/store/CartWishlistContext';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';

// Same demo data (should ideally be shared)
const PRODUCT_MAP = {
  1: {
    name: "Handwoven Wall Art",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=500&fit=crop",
    category: "Home Decor",
    price: 25,
    description: "Beautiful handcrafted wall art piece"
  },
  2: {
    name: "Vintage Leather Sofa",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=500&fit=crop",
    category: "Furniture",
    price: 899,
    description: "Comfortable vintage leather sofa"
  },
  3: {
    name: "Traditional Embroidered Dress",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=500&fit=crop",
    category: "Clothing",
    price: 159,
    description: "Elegant traditional dress with embroidery"
  },
  4: {
    name: "Handcrafted Jewelry Set",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=500&fit=crop",
    category: "Accessories",
    price: 89,
    description: "Unique handmade jewelry collection"
  },
  5: {
    name: "Ceramic Pottery Collection",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=500&fit=crop",
    category: "Handicrafts",
    price: 199,
    description: "Handmade ceramic pottery set"
  },
  6: {
    name: "Organic Skincare Set",
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=500&fit=crop",
    category: "Health and Beauty",
    price: 79,
    description: "Natural organic skincare products"
  }
};

export default function Cart() {
  const { cart, removeFromCart } = useCartWishlist();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <div className="container mx-auto flex-1 px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
        {cart && cart.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cart.map((item) => {
              const product = PRODUCT_MAP[item.id];
              if (!product) return null;
              return (
                <Card
                  key={item.id}
                  className="p-0 overflow-hidden shadow-lg transition-all card-hover card-hover:hover:scale-105 group"
                >
                  <div className="relative aspect-[4/3] bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute top-3 right-3 rounded-full bg-white/85 hover:bg-green-100 shadow"
                      aria-label="Product in cart"
                      disabled
                    >
                      <ShoppingCart className="text-green-500" />
                    </Button>
                  </div>
                  <div className="p-5 flex flex-col gap-2">
                    <h3 className="font-bold text-lg">{product.name}</h3>
                    <div className="flex items-center justify-between w-full">
                      <span className="text-sm text-gray-500">{product.category}</span>
                      <span className="font-semibold text-[#222]">${product.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
                    <div className="text-xs text-gray-500">Quantity: <span className="font-bold">{item.quantity}</span></div>
                    <div className="mt-3 flex gap-2">
                      <Button
                        className="flex-1 btn-primary btn-animate font-semibold"
                        variant="destructive"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
            <div className="mt-8 flex justify-end col-span-full">
              <Button size="lg" className="btn-primary" disabled>
                Checkout (coming soon)
              </Button>
            </div>
          </div>
        ) : (
          <div className="py-20 text-center space-y-4">
            <div className="text-gray-500">Your cart is empty.</div>
            <Button onClick={() => navigate('/products')}>Browse Products</Button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
