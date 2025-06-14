import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';

export function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: 'Subscribed!',
        description: 'Thank you for subscribing to our newsletter.',
      });
      setEmail('');
    }
  };

  return (
    <section className="py-20 bg-[#F8F8F8]">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="h2">Stay Connected</h2>
            <p className="subtitle">
              Get notified about new local products, rental deals, and exclusive offers from trusted creators.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="marketplace-input flex-1 bg-white text-black"
            />
            <Button
              type="submit"
              className="btn-primary"
            >
              Subscribe
            </Button>
          </form>
          <div className="flex items-center justify-center gap-8 text-sm text-[#555]">
            <div className="text-center">
              <div className="font-semibold text-black text-xl">5k+</div>
              <div>Subscribers</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-black text-xl">Weekly</div>
              <div>Updates</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-[#4CAF50] text-xl">Verified</div>
              <div>Products</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
