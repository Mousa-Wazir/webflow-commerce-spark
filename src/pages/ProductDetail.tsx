
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { productMock } from "@/data/productMock";
import { ProductImageGallery } from "@/components/product-detail/ProductImageGallery";
import { ProductInfo } from "@/components/product-detail/ProductInfo";
import { ProductOptions } from "@/components/product-detail/ProductOptions";
import { ProductActions } from "@/components/product-detail/ProductActions";
import { ProductExtraDetails } from "@/components/product-detail/ProductExtraDetails";
import { ArrowLeft } from 'lucide-react';

const rentalOptions = [
  { value: '1-day', label: '1 Day - $8' },
  { value: '3-days', label: '3 Days - $20' },
  { value: '1-week', label: '1 Week - $45' },
  { value: '1-month', label: '1 Month - $150' }
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // The mock currently doesn't use id, but you can eventually fetch detail using id
  const product = productMock;

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [rentalDuration, setRentalDuration] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/products')}
          className="mb-6 text-gray-600 hover:text-black"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Button>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ProductImageGallery images={product.images} name={product.name} />
          <div className="space-y-6">
            <ProductInfo
              name={product.name}
              category={product.category}
              isVerified={product.isVerified}
              rating={product.rating}
              description={product.description}
            />
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
            <ProductOptions
              sizes={product.sizes}
              colors={product.colors}
              isRentable={product.isRentable}
              rentalOptions={rentalOptions}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
              rentalDuration={rentalDuration}
              setRentalDuration={setRentalDuration}
            />
            <ProductActions 
              productId={product.id}
              productName={product.name}
              productPrice={product.price}
              isRentable={product.isRentable}
              rentalPrice={product.rentalPrice}
            />
            <ProductExtraDetails
              vendor={product.vendor}
              material={product.details.material}
              origin={product.details.origin}
              care={product.details.care}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
