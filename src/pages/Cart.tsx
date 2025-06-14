
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCartWishlist } from '@/store/CartWishlistContext';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const { cart, removeFromCart } = useCartWishlist();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <div className="container mx-auto flex-1 px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
        {cart && cart.length > 0 ? (
          <div className="space-y-4">
            {cart.map((item) => (
              <Card key={item.id} className="flex items-center justify-between p-4">
                <div>
                  <div className="font-semibold">Product #{item.id}</div>
                  <div className="text-gray-500 text-sm">Quantity: {item.quantity}</div>
                </div>
                <Button 
                  variant="destructive"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </Card>
            ))}
            <div className="mt-8 flex justify-end">
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
