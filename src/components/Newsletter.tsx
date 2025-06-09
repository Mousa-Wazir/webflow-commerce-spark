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
  return <section className="py-20 bg-gradient-to-r from-gray-500 to-black-500 text-white bg-slate-300">
      <div className="container mx-auto px-4 bg-slate-300">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Stay Connected
            </h2>
            <p className="text-white/90 text-lg">
              Get notified about new local products, rental deals, and exclusive offers from verified creators in your area.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} required className="flex-1 bg-white text-gray-900 border-white/20 placeholder:text-gray-500" />
            <Button type="submit" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
              Subscribe
            </Button>
          </form>

          <div className="flex items-center justify-center gap-8 text-sm text-white/80">
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
    </section>;
}