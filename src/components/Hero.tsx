
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-y-12"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Bringing Local
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Creativity to Life
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Discover and rent unique local products from talented creators in your community. From handcrafted furniture to beautiful decor.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200" 
              onClick={() => navigate('/products')}
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-emerald-400 bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-white backdrop-blur-sm transition-all duration-200"
            >
              <Shield className="mr-2 h-5 w-5" />
              NADRA Verification
            </Button>
          </div>

          <div className="flex items-center justify-center gap-12 text-sm text-slate-400 pt-8">
            <div className="text-center">
              <div className="font-bold text-white text-2xl">1000+</div>
              <div>Local Products</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-white text-2xl">500+</div>
              <div>Verified Vendors</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-white text-2xl">100%</div>
              <div>Secure Rentals</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
