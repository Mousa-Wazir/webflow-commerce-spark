
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCartWishlist } from '@/store/CartWishlistContext';
import { useNavigate } from 'react-router-dom';

export default function Wishlist() {
  const { wishlist, wishlistToggle, addToCart, isInCart } = useCartWishlist();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <div className="container mx-auto flex-1 px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Your Wishlist</h2>
        {wishlist && wishlist.length > 0 ? (
          <div className="space-y-4">
            {wishlist.map((id) => (
              <Card key={id} className="flex items-center justify-between p-4">
                <div>
                  <div className="font-semibold">Product #{id}</div>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline"
                    onClick={() => {
                      if (!isInCart(id)) {
                        addToCart(id);
                      }
                    }}
                    disabled={isInCart(id)}
                  >
                    {isInCart(id) ? 'In Cart' : 'Add to Cart'}
                  </Button>
                  <Button 
                    variant="destructive"
                    onClick={() => wishlistToggle(id)}
                  >
                    Remove
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center space-y-4">
            <div className="text-gray-500">Your wishlist is empty.</div>
            <Button onClick={() => navigate('/products')}>Browse Products</Button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
