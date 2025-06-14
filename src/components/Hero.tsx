
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[70vh] flex items-center bg-black">
      {/* Landscape Hero Image - Used Handicrafts category (Ceramic Pottery Collection) */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=1440&h=500&fit=crop"
          alt="Ceramic Pottery Collection - Handicrafts category"
          className="w-full h-[500px] object-cover"
          style={{ objectPosition: "center" }}
        />
        {/* Overlay for legibility: soft dark at bottom, transparent top */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 
              "linear-gradient(to top, rgba(20,20,20,0.78) 65%, rgba(30,30,30,0.15) 100%, transparent)"
          }}
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 py-12 md:py-28 animate-fade-in">
          <div className="space-y-6">
            <h1 className="h1 leading-tight text-white font-extrabold drop-shadow">
              Unlock <span className="text-white font-extrabold">Local Rentals</span>
              <br />
              <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent font-extrabold">
                Effortlessly & Securely.
              </span>
            </h1>
            <p className="subtitle max-w-2xl mx-auto leading-relaxed text-white font-semibold drop-shadow">
              Find and rent unique products from skilled creators in your community.
              <br className="hidden md:inline" /> Modern, trusted, and built for the way you live.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-black hover:bg-gray-800 text-white font-bold shadow-lg btn-animate"
              onClick={() => navigate('/products')}
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              className="bg-gray-700 hover:bg-gray-900 text-white font-semibold btn-animate flex items-center gap-2 border-none shadow-lg"
              onClick={() => navigate('/nadra-verification')}
            >
              <Shield className="h-5 w-5" />
              Identity Verification
            </Button>
          </div>
          <div className="flex items-center justify-center gap-12 text-sm text-white pt-8">
            <div className="text-center">
              <div className="font-bold text-white text-2xl">1000+</div>
              <div className="font-semibold">Products</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-white text-2xl">500+</div>
              <div className="font-semibold">Verified Vendors</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-white text-2xl flex items-center justify-center gap-1">
                <Shield className="h-5 w-5" /> Identity Verified
              </div>
              <div className="font-semibold">Secure Rentals</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
