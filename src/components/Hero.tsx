
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-muted-foreground uppercase tracking-wider text-sm font-medium">
                New Collection
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Modern
                <br />
                <span className="text-muted-foreground">Elegance</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                Discover our carefully curated collection of premium fashion pieces that blend contemporary style with timeless sophistication.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Shop Collection
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                View Lookbook
              </Button>
            </div>

            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <div>
                <div className="font-semibold text-foreground text-2xl">500+</div>
                <div>Premium Items</div>
              </div>
              <div>
                <div className="font-semibold text-foreground text-2xl">50k+</div>
                <div>Happy Customers</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[3/4] bg-muted rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
                <div className="text-muted-foreground text-lg font-medium">Featured Product Image</div>
              </div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-lg shadow-lg border border-border">
              <div className="space-y-2">
                <h3 className="font-semibold">Premium Jacket</h3>
                <p className="text-muted-foreground text-sm">Limited Edition</p>
                <p className="font-bold text-lg">$299</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
