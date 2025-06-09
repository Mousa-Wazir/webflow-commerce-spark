import { Button } from '@/components/ui/button';
import { ArrowRight, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export function Hero() {
  const navigate = useNavigate();
  return <section className="relative min-h-[70vh] flex items-center">
      {/* Banner Image Background */}
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=1920&h=1080&fit=crop" alt="Local marketplace banner" className="w-full h-full object-cover" />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Bringing Local
              <br />
              <span className="text-yellow-400">Creativity to Life</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
              Discover and rent unique local products from talented creators in your community. From handcrafted furniture to beautiful decor.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group bg-yellow-500 hover:bg-yellow-600 text-black font-semibold" onClick={() => navigate('/products')}>
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="border-white bg-green-600 hover:bg-green-500 text-slate-950">
              <Shield className="mr-2 h-5 w-5" />
              NADRA Verification
            </Button>
          </div>

          <div className="flex items-center justify-center gap-12 text-sm text-gray-300 pt-8">
            <div className="text-center">
              <div className="font-semibold text-white text-2xl">1000+</div>
              <div>Local Products</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-white text-2xl">500+</div>
              <div>Verified Vendors</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-white text-2xl">100%</div>
              <div>Secure Rentals</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}