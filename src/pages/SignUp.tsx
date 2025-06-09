
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, EyeOff } from 'lucide-react';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [customerData, setCustomerData] = useState({
    name: '',
    email: '',
    password: '',
    cnic: ''
  });
  const [sellerData, setSellerData] = useState({
    name: '',
    email: '',
    password: '',
    cnic: '',
    businessName: ''
  });

  const handleCustomerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Customer sign up:', customerData);
  };

  const handleSellerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Seller sign up:', sellerData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-black mb-2">Join LocalRent</h1>
            <p className="text-gray-600">Create your account to get started</p>
          </div>

          <Card className="marketplace-card">
            <CardHeader>
              <CardTitle className="text-center">Sign Up</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="customer" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="customer">Customer</TabsTrigger>
                  <TabsTrigger value="seller">Seller</TabsTrigger>
                </TabsList>
                
                {/* Customer Sign Up */}
                <TabsContent value="customer">
                  <form onSubmit={handleCustomerSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Full Name
                      </label>
                      <Input
                        type="text"
                        placeholder="John Doe"
                        value={customerData.name}
                        onChange={(e) => setCustomerData({ ...customerData, name: e.target.value })}
                        className="marketplace-input"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={customerData.email}
                        onChange={(e) => setCustomerData({ ...customerData, email: e.target.value })}
                        className="marketplace-input"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Password
                      </label>
                      <div className="relative">
                        <Input
                          type={showPassword ? 'text' : 'password'}
                          placeholder="••••••••"
                          value={customerData.password}
                          onChange={(e) => setCustomerData({ ...customerData, password: e.target.value })}
                          className="marketplace-input pr-10"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        CNIC Number (Optional)
                      </label>
                      <Input
                        type="text"
                        placeholder="12345-6789012-3"
                        value={customerData.cnic}
                        onChange={(e) => setCustomerData({ ...customerData, cnic: e.target.value })}
                        className="marketplace-input"
                        maxLength={15}
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Optional for customers, helps build trust
                      </p>
                    </div>
                    
                    <div className="flex items-center text-sm">
                      <input type="checkbox" className="mr-2" required />
                      <span className="text-gray-600">
                        I agree to the{' '}
                        <Link to="/terms" className="text-black hover:underline">
                          Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link to="/privacy" className="text-black hover:underline">
                          Privacy Policy
                        </Link>
                      </span>
                    </div>
                    
                    <Button type="submit" className="marketplace-button w-full">
                      Create Customer Account
                    </Button>
                  </form>
                </TabsContent>
                
                {/* Seller Sign Up */}
                <TabsContent value="seller">
                  <form onSubmit={handleSellerSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Full Name
                      </label>
                      <Input
                        type="text"
                        placeholder="John Doe"
                        value={sellerData.name}
                        onChange={(e) => setSellerData({ ...sellerData, name: e.target.value })}
                        className="marketplace-input"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Business Name
                      </label>
                      <Input
                        type="text"
                        placeholder="Your Business Name"
                        value={sellerData.businessName}
                        onChange={(e) => setSellerData({ ...sellerData, businessName: e.target.value })}
                        className="marketplace-input"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="business@email.com"
                        value={sellerData.email}
                        onChange={(e) => setSellerData({ ...sellerData, email: e.target.value })}
                        className="marketplace-input"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Password
                      </label>
                      <div className="relative">
                        <Input
                          type={showPassword ? 'text' : 'password'}
                          placeholder="••••••••"
                          value={sellerData.password}
                          onChange={(e) => setSellerData({ ...sellerData, password: e.target.value })}
                          className="marketplace-input pr-10"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        CNIC Number (Required)
                      </label>
                      <Input
                        type="text"
                        placeholder="12345-6789012-3"
                        value={sellerData.cnic}
                        onChange={(e) => setSellerData({ ...sellerData, cnic: e.target.value })}
                        className="marketplace-input"
                        maxLength={15}
                        required
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Required for seller verification
                      </p>
                    </div>
                    
                    <div className="flex items-center text-sm">
                      <input type="checkbox" className="mr-2" required />
                      <span className="text-gray-600">
                        I agree to the{' '}
                        <Link to="/terms" className="text-black hover:underline">
                          Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link to="/privacy" className="text-black hover:underline">
                          Privacy Policy
                        </Link>
                      </span>
                    </div>
                    
                    <Button type="submit" className="marketplace-button w-full">
                      Create Seller Account
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{' '}
                  <Link to="/signin" className="text-black hover:underline font-medium">
                    Sign in here
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SignUp;
