
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[70vh] flex items-center bg-[#44C774]">
      {/* Landscape Hero Image - Used category wall art product */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1440&h=450&fit=crop"
          alt="Handwoven wall art - Home Decor category"
          className="w-full h-[450px] object-cover mix-blend-multiply"
          style={{ objectPosition: "center" }}
        />
        {/* Overlay for stronger green tint and white text legibility */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(68,199,116,0.98), rgba(68,199,116,0.88) 80%, rgba(68,199,116,0.7))" }}
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 py-12 md:py-28 animate-fade-in">
          <div className="space-y-6">
            <h1 className="h1 leading-tight text-white font-bold">
              Unlock <span className="text-white font-bold">Local Rentals</span><br />
              <span className="bg-gradient-to-r from-white to-[#dcffe0] bg-clip-text text-transparent font-bold">Effortlessly & Securely.</span>
            </h1>
            <p className="subtitle max-w-2xl mx-auto leading-relaxed text-white font-semibold">
              Find and rent unique products from skilled creators in your community.<br className="hidden md:inline" /> Modern, trusted, and built for the way you live.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="btn-primary text-lg font-bold shadow-lg btn-animate"
              onClick={() => navigate('/products')}
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              className="bg-[#266a41] hover:bg-[#1c5131] text-white font-semibold btn-animate flex items-center gap-2 border-none shadow-lg"
              // distinct green background!
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

