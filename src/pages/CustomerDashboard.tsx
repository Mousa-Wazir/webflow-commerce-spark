
import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Calendar, Heart, Shield, Edit, Eye } from 'lucide-react';

const CustomerDashboard = () => {
  const [verificationStatus] = useState<'verified' | 'pending' | 'none'>('verified');

  const activeRentals = [
    {
      id: 1,
      name: 'Handwoven Wall Art',
      category: 'Home Decor',
      rentedOn: '2024-06-01',
      returnBy: '2024-06-08',
      dailyRate: 8,
      totalCost: 56,
      status: 'active',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Vintage Leather Sofa',
      category: 'Furniture',
      rentedOn: '2024-05-28',
      returnBy: '2024-06-28',
      dailyRate: 45,
      totalCost: 1350,
      status: 'active',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=300&fit=crop'
    }
  ];

  const rentalHistory = [
    {
      id: 3,
      name: 'Traditional Embroidered Dress',
      category: 'Clothing',
      rentedOn: '2024-05-15',
      returnedOn: '2024-05-18',
      totalCost: 75,
      status: 'completed',
      rating: 5
    },
    {
      id: 4,
      name: 'Ceramic Pottery Collection',
      category: 'Handicrafts',
      rentedOn: '2024-05-01',
      returnedOn: '2024-05-08',
      totalCost: 105,
      status: 'completed',
      rating: 4
    }
  ];

  const wishlist = [
    {
      id: 5,
      name: 'Wooden Coffee Table',
      category: 'Furniture',
      price: 299,
      rentalPrice: 20,
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=300&fit=crop'
    },
    {
      id: 6,
      name: 'Designer Handbag',
      category: 'Accessories',
      price: 149,
      rentalPrice: 12,
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=300&fit=crop'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-600';
      case 'completed':
        return 'bg-gray-600';
      case 'overdue':
        return 'bg-red-600';
      default:
        return 'bg-gray-400';
    }
  };

  const getVerificationBadge = () => {
    switch (verificationStatus) {
      case 'verified':
        return <Badge className="bg-green-600 text-white">Verified</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-600 text-white">Pending</Badge>;
      default:
        return <Badge variant="outline">Not Verified</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">Customer Dashboard</h1>
          <p className="text-gray-600">Manage your rentals and account settings</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <Card className="marketplace-card">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="h-10 w-10 text-gray-600" />
                </div>
                <CardTitle className="text-lg">John Doe</CardTitle>
                <p className="text-sm text-gray-600">john.doe@email.com</p>
                {getVerificationBadge()}
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-black">5</div>
                    <div className="text-sm text-gray-600">Total Rentals</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-black">$1,586</div>
                    <div className="text-sm text-gray-600">Total Spent</div>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="active-rentals" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-6">
                <TabsTrigger value="active-rentals">Active Rentals</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
                <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
                <TabsTrigger value="verification">Verification</TabsTrigger>
              </TabsList>

              {/* Active Rentals */}
              <TabsContent value="active-rentals" className="space-y-6">
                <h2 className="text-xl font-semibold text-black">Active Rentals</h2>
                {activeRentals.map((rental) => (
                  <Card key={rental.id} className="marketplace-card">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-4">
                        <img 
                          src={rental.image}
                          alt={rental.name}
                          className="w-full md:w-24 h-24 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-semibold text-black">{rental.name}</h3>
                              <p className="text-sm text-gray-600">{rental.category}</p>
                            </div>
                            <Badge className={`${getStatusColor(rental.status)} text-white`}>
                              {rental.status}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <span className="text-gray-600">Rented on:</span>
                              <div className="font-medium">{rental.rentedOn}</div>
                            </div>
                            <div>
                              <span className="text-gray-600">Return by:</span>
                              <div className="font-medium">{rental.returnBy}</div>
                            </div>
                            <div>
                              <span className="text-gray-600">Daily rate:</span>
                              <div className="font-medium">${rental.dailyRate}</div>
                            </div>
                            <div>
                              <span className="text-gray-600">Total cost:</span>
                              <div className="font-medium">${rental.totalCost}</div>
                            </div>
                          </div>
                          <div className="flex gap-2 mt-4">
                            <Button size="sm" variant="outline">
                              <Calendar className="h-4 w-4 mr-2" />
                              Extend Rental
                            </Button>
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4 mr-2" />
                              View Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              {/* Rental History */}
              <TabsContent value="history" className="space-y-6">
                <h2 className="text-xl font-semibold text-black">Rental History</h2>
                {rentalHistory.map((rental) => (
                  <Card key={rental.id} className="marketplace-card">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-black">{rental.name}</h3>
                          <p className="text-sm text-gray-600">{rental.category}</p>
                        </div>
                        <Badge className={`${getStatusColor(rental.status)} text-white`}>
                          {rental.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Rented:</span>
                          <div className="font-medium">{rental.rentedOn}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Returned:</span>
                          <div className="font-medium">{rental.returnedOn}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Total cost:</span>
                          <div className="font-medium">${rental.totalCost}</div>
                        </div>
                        <div>
                          <span className="text-gray-600">Rating:</span>
                          <div className="font-medium">{rental.rating}/5 ⭐</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              {/* Wishlist */}
              <TabsContent value="wishlist" className="space-y-6">
                <h2 className="text-xl font-semibold text-black">Wishlist</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {wishlist.map((item) => (
                    <Card key={item.id} className="marketplace-card">
                      <CardContent className="p-4">
                        <img 
                          src={item.image}
                          alt={item.name}
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h3 className="font-semibold text-black mb-1">{item.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{item.category}</p>
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-bold text-black">${item.price}</span>
                          <span className="text-sm text-gray-600">${item.rentalPrice}/day</span>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" className="marketplace-button flex-1">
                            Rent Now
                          </Button>
                          <Button size="sm" variant="outline">
                            <Heart className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Verification */}
              <TabsContent value="verification" className="space-y-6">
                <h2 className="text-xl font-semibold text-black">NADRA Verification</h2>
                <Card className="marketplace-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Shield className="h-8 w-8 text-green-600" />
                      <div>
                        <h3 className="font-semibold text-black">Verification Status</h3>
                        {getVerificationBadge()}
                      </div>
                    </div>
                    
                    {verificationStatus === 'verified' ? (
                      <div className="text-sm text-gray-600 space-y-2">
                        <p>✓ Identity verified through NADRA</p>
                        <p>✓ Trusted customer status</p>
                        <p>✓ Access to premium products</p>
                        <p>✓ Priority customer support</p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-gray-600 mb-4">
                          Complete NADRA verification to unlock premium features and build trust with sellers.
                        </p>
                        <Button className="marketplace-button">
                          Start Verification
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CustomerDashboard;
