
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
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter."
      });
      setEmail('');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Stay Connected
            </h2>
            <p className="text-slate-300 text-lg">
              Get notified about new local products, rental deals, and exclusive offers from verified creators in your area.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white text-slate-900 border-slate-300 placeholder:text-slate-500"
            />
            <Button 
              type="submit" 
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white"
            >
              Subscribe
            </Button>
          </form>

          <div className="flex items-center justify-center gap-8 text-sm text-slate-400">
            <div className="text-center">
              <div className="font-semibold text-white text-xl">5k+</div>
              <div>Subscribers</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-white text-xl">Weekly</div>
              <div>Updates</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-white text-xl">Verified</div>
              <div>Products</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
