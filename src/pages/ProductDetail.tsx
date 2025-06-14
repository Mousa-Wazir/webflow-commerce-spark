import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Heart, Shield, Star } from 'lucide-react';
import { useCartWishlist } from '@/store/CartWishlistContext';
import { toast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [rentalDuration, setRentalDuration] = useState('');

  // Mock product data
  const product = {
    id: 1,
    name: 'Handwoven Wall Art',
    category: 'Home Decor',
    price: 25,
    rentalPrice: 8,
    isRentable: true,
    isVerified: true,
    rating: 4.5,
    description: 'Beautiful handcrafted wall art piece made by local artisans. This unique piece adds character to any room with its intricate patterns and vibrant colors.',
    images: [
      'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=600&fit=crop'
    ],
    sizes: ['Small (12x16)', 'Medium (16x20)', 'Large (20x24)'],
    colors: ['Natural', 'Blue', 'Earth Tones'],
    vendor: 'Artisan Workshop',
    details: {
      material: 'Handwoven Cotton',
      origin: 'Local Craftsmen',
      care: 'Dry clean only'
    }
  };

  const rentalOptions = [
    { value: '1-day', label: '1 Day - $8' },
    { value: '3-days', label: '3 Days - $20' },
    { value: '1-week', label: '1 Week - $45' },
    { value: '1-month', label: '1 Month - $150' }
  ];

  const {
    addToCart,
    isInCart,
    wishlistToggle,
    isWishlisted,
  } = useCartWishlist();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Navigation */}
        <Button 
          variant="ghost" 
          onClick={() => navigate('/products')}
          className="mb-6 text-gray-600 hover:text-black"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-white shadow-sm">
              <img 
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded-md border-2 transition-colors ${
                    selectedImage === index ? 'border-black' : 'border-gray-200'
                  }`}
                >
                  <img 
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="text-xs">
                  {product.category}
                </Badge>
                {product.isVerified && (
                  <Badge className="bg-green-600 text-white text-xs flex items-center gap-1">
                    <Shield className="h-3 w-3" />
                    VERIFIED
                  </Badge>
                )}
              </div>
              <h1 className="text-3xl font-bold text-black mb-2">{product.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">({product.rating})</span>
              </div>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Pricing */}
            <Card className="marketplace-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-black">${product.price}</span>
                    <span className="text-sm text-gray-600 ml-2">to buy</span>
                  </div>
                  {product.isRentable && (
                    <div className="text-right">
                      <span className="text-lg font-semibold text-gray-700">${product.rentalPrice}/day</span>
                      <div className="text-sm text-gray-600">rental price</div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Options */}
            <div className="space-y-4">
              {/* Size Selection */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">Size</label>
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger className="marketplace-input">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    {product.sizes.map((size) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Color Selection */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">Color</label>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-md border transition-colors ${
                        selectedColor === color 
                          ? 'border-black bg-black text-white' 
                          : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Rental Duration */}
              {product.isRentable && (
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Rental Duration</label>
                  <Select value={rentalDuration} onValueChange={setRentalDuration}>
                    <SelectTrigger className="marketplace-input">
                      <SelectValue placeholder="Select rental period" />
                    </SelectTrigger>
                    <SelectContent>
                      {rentalOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button
                className="marketplace-button flex-1"
                onClick={() => {
                  if (!isInCart(product.id)) {
                    addToCart(product.id);
                    toast({ title: "Added to cart", description: product.name });
                  } else {
                    toast({ title: "Product already in cart", description: product.name });
                  }
                }}
                disabled={isInCart(product.id)}
              >
                {isInCart(product.id)
                  ? `In Cart`
                  : `Buy Now - $${product.price}`}
              </Button>
              {product.isRentable && (
                <Button className="marketplace-button flex-1">
                  Rent Now
                </Button>
              )}
              <Button
                variant={isWishlisted(product.id) ? "default" : "outline"}
                size="icon"
                className={`border-gray-300 hover:bg-gray-100 ${isWishlisted(product.id) ? "ring-2 ring-[#F44336]" : ""}`}
                onClick={() => {
                  wishlistToggle(product.id);
                  toast({
                    title: isWishlisted(product.id) ? "Removed from Wishlist" : "Added to Wishlist",
                    description: product.name,
                  });
                }}
                aria-label={isWishlisted(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                <Heart className={`h-4 w-4 ${isWishlisted(product.id) ? "fill-[#F44336] text-[#F44336]" : ""}`} fill={isWishlisted(product.id) ? '#F44336' : 'none'} />
              </Button>
            </div>

            {/* Product Details */}
            <Card className="marketplace-card">
              <CardContent className="p-6">
                <h3 className="font-semibold text-black mb-4">Product Details</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Vendor:</span>
                    <span className="text-black">{product.vendor}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Material:</span>
                    <span className="text-black">{product.details.material}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Origin:</span>
                    <span className="text-black">{product.details.origin}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Care:</span>
                    <span className="text-black">{product.details.care}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
