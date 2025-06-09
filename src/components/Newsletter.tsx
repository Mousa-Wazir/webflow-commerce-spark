
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
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail('');
    }
  };

  return (
    <section className="py-20 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Stay in the Loop
            </h2>
            <p className="text-background/80 text-lg">
              Be the first to know about new collections, exclusive offers, and fashion insights.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-background text-foreground border-background/20"
            />
            <Button type="submit" variant="secondary">
              Subscribe
            </Button>
          </form>

          <div className="flex items-center justify-center gap-8 text-sm text-background/60">
            <div>
              <div className="font-semibold text-background text-xl">10k+</div>
              <div>Subscribers</div>
            </div>
            <div>
              <div className="font-semibold text-background text-xl">Weekly</div>
              <div>Updates</div>
            </div>
            <div>
              <div className="font-semibold text-background text-xl">Exclusive</div>
              <div>Offers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
