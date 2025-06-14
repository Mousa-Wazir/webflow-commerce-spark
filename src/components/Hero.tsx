
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[70vh] flex items-center bg-black overflow-hidden">
      {/* Prominent, attractive new hero image */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=1440&h=600&fit=crop"
          alt="Stunning Mountain Lake View"
          className="w-full h-[600px] object-cover object-center"
          style={{
            filter: 'brightness(0.94) contrast(1.08) saturate(1.08)'
          }}
        />
        {/* Brighter, more visually interesting overlay gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top right, rgba(30,41,59,0.66) 10%, rgba(255,255,255,0.14) 85%, transparent 100%)'
          }}
        />
      </div>
      {/* Main content over the image */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center w-full">
        <div className="max-w-4xl w-full mx-auto text-center space-y-8 py-10 md:py-24 animate-fade-in flex flex-col items-center">
          <div className="space-y-6">
            <h1 className="h1 leading-tight font-extrabold drop-shadow-2xl text-white">
              Unlock{' '}
              <span className="font-extrabold text-white">Local Rentals</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-600 bg-clip-text text-transparent font-extrabold drop-shadow-2xl">
                Effortlessly & Securely.
              </span>
            </h1>
            <p className="subtitle max-w-2xl mx-auto leading-relaxed font-semibold text-white/90 drop-shadow">
              Find and rent unique products from skilled creators in your community.
              <br className="hidden md:inline" /> Modern, trusted, and built for the way you live.
            </p>
          </div>
          {/* Stylish buttons, overlaid on the image */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full items-center">
            <Button
              size="lg"
              className="btn-animate bg-white hover:bg-gray-100 text-black font-bold shadow-lg border border-black/10 transition-transform duration-200"
              onClick={() => navigate('/products')}
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              className="btn-animate bg-gradient-to-r from-blue-600 via-sky-400 to-cyan-400 hover:from-blue-700 hover:via-sky-500 hover:to-cyan-500 text-white font-semibold flex items-center gap-2 shadow-xl border border-white/20 drop-shadow-xl"
              style={{
                boxShadow: '0 8px 28px 0 rgba(59,130,246,.22)'
              }}
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

