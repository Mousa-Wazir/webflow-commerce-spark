
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-tr from-[#f8f8f8] via-[#fafafa] to-white">
      {/* Modern geometric overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 450" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="bannerFade" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
              <stop stopColor="#f8f8f8" />
              <stop offset="1" stopColor="#fff" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="1440" height="450" fill="url(#bannerFade)" />
          <circle cx="420" cy="100" r="96" fill="#F3F3F3" opacity="0.7"/>
          <circle cx="1200" cy="300" r="120" fill="#EBEBEB" opacity="0.5"/>
        </svg>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 py-12 md:py-28 animate-fade-in">
          <div className="space-y-6">
            <h1 className="h1 leading-tight text-black">
              Unlock <span className="text-[#222222]">Local Rentals</span><br />
              <span className="bg-gradient-to-r from-[#333] to-[#222] bg-clip-text text-transparent">Effortlessly & Securely.</span>
            </h1>
            <p className="subtitle max-w-2xl mx-auto leading-relaxed">
              Find and rent unique products from skilled creators in your community.<br className="hidden md:inline" /> Modern, trusted, and built for the way you live.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="btn-primary text-lg font-bold shadow-lg btn-animate"
              onClick={() => navigate('/products')}
            >
              Browse Products
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="btn-outline font-semibold btn-animate"
              onClick={() => navigate('/about')}
            >
              Learn About Us
            </Button>
          </div>
          <div className="flex items-center justify-center gap-12 text-sm text-[#555] pt-8">
            <div className="text-center">
              <div className="font-bold text-black text-2xl">1000+</div>
              <div>Products</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-black text-2xl">500+</div>
              <div>Verified Vendors</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-[#4CAF50] text-2xl flex items-center justify-center gap-1">
                <Shield className="h-5 w-5" /> Identity Verified
              </div>
              <div>Secure Rentals</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
