import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Upload, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const NADRAVerification = () => {
  const [cnicNumber, setCnicNumber] = useState('');
  const [verificationStatus, setVerificationStatus] = useState<'none' | 'pending' | 'verified' | 'failed'>('none');
  const [cnicFront, setCnicFront] = useState<File | null>(null);
  const [cnicBack, setCnicBack] = useState<File | null>(null);
  const [selfie, setSelfie] = useState<File | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, type: 'front' | 'back' | 'selfie') => {
    const file = event.target.files?.[0];
    if (file) {
      if (type === 'front') setCnicFront(file);
      else if (type === 'back') setCnicBack(file);
      else setSelfie(file);
    }
  };

  const handleVerification = () => {
    if (
      cnicNumber.length === 15 &&
      cnicFront &&
      cnicBack &&
      selfie
    ) {
      setVerificationStatus('pending');
      setTimeout(() => {
        setVerificationStatus('verified');
      }, 3000);
    }
  };

  const getStatusIcon = () => {
    switch (verificationStatus) {
      case 'verified':
        return <CheckCircle className="h-8 w-8 text-green-600" />;
      case 'pending':
        return <Clock className="h-8 w-8 text-yellow-600" />;
      case 'failed':
        return <AlertCircle className="h-8 w-8 text-red-600" />;
      default:
        return <Shield className="h-8 w-8 text-gray-400" />;
    }
  };

  const getStatusText = () => {
    switch (verificationStatus) {
      case 'verified':
        return 'Verified';
      case 'pending':
        return 'Verification Pending';
      case 'failed':
        return 'Verification Failed';
      default:
        return 'Not Verified';
    }
  };

  const getStatusColor = () => {
    switch (verificationStatus) {
      case 'verified':
        return 'bg-green-600';
      case 'pending':
        return 'bg-yellow-600';
      case 'failed':
        return 'bg-red-600';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Shield className="h-10 w-10 text-[#4CAF50]" />
            </div>
            <h1 className="text-4xl font-bold text-[#222] mb-4">Identity Verification</h1>
            <p className="text-xl text-[#555] max-w-2xl mx-auto">
              Verify your identity to build trust and unlock all platform features.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Verification Form */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="marketplace-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Identity Verification
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* CNIC Number Input */}
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      CNIC Number
                    </label>
                    <input
                      type="text"
                      placeholder="12345-6789012-3"
                      value={cnicNumber}
                      onChange={(e) => setCnicNumber(e.target.value)}
                      maxLength={15}
                      className="marketplace-input w-full"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Enter your 13-digit CNIC number with dashes
                    </p>
                  </div>

                  {/* CNIC Front Upload */}
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      CNIC Front Picture (User/Seller)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-2">
                        Click to upload or drag and drop
                      </p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e, 'front')}
                        className="hidden"
                        id="cnic-front-upload"
                      />
                      <label
                        htmlFor="cnic-front-upload"
                        className="inline-block mt-4 marketplace-button cursor-pointer"
                      >
                        Choose CNIC Front
                      </label>
                    </div>
                    {cnicFront && (
                      <p className="text-sm text-green-600 mt-2">
                        File uploaded: {cnicFront.name}
                      </p>
                    )}
                  </div>

                  {/* CNIC Back Upload */}
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      CNIC Back Picture (User/Seller)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-2">
                        Click to upload or drag and drop
                      </p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e, 'back')}
                        className="hidden"
                        id="cnic-back-upload"
                      />
                      <label
                        htmlFor="cnic-back-upload"
                        className="inline-block mt-4 marketplace-button cursor-pointer"
                      >
                        Choose CNIC Back
                      </label>
                    </div>
                    {cnicBack && (
                      <p className="text-sm text-green-600 mt-2">
                        File uploaded: {cnicBack.name}
                      </p>
                    )}
                  </div>

                  {/* Selfie Upload */}
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Selfie Picture (User/Seller)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-2">
                        Click to upload or drag and drop
                      </p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e, 'selfie')}
                        className="hidden"
                        id="selfie-upload"
                      />
                      <label
                        htmlFor="selfie-upload"
                        className="inline-block mt-4 marketplace-button cursor-pointer"
                      >
                        Choose Selfie
                      </label>
                    </div>
                    {selfie && (
                      <p className="text-sm text-green-600 mt-2">
                        File uploaded: {selfie.name}
                      </p>
                    )}
                  </div>

                  {/* Verification Button */}
                  <Button
                    onClick={handleVerification}
                    disabled={!cnicNumber || !cnicFront || !cnicBack || !selfie}
                    className="marketplace-button w-full"
                  >
                    {verificationStatus === 'pending' ? 'Verifying...' : 'Start Verification'}
                  </Button>
                </CardContent>
              </Card>

              {/* How It Works */}
              <Card className="marketplace-card">
                <CardHeader>
                  <CardTitle>How Identity Verification Works</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      <div>
                        <h3 className="font-medium text-black">Submit Information</h3>
                        <p className="text-sm text-gray-600">Enter your CNIC number and upload CNIC front, CNIC back and selfie images</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                      <div>
                        <h3 className="font-medium text-black">Identity Verification</h3>
                        <p className="text-sm text-gray-600">We verify your identity through our secure process</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">
                        3
                      </div>
                      <div>
                        <h3 className="font-medium text-black">Get Verified</h3>
                        <p className="text-sm text-gray-600">Receive verification badge and unlock full access</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Status Panel */}
            <div className="space-y-6">
              <Card className="marketplace-card">
                <CardHeader>
                  <CardTitle>Verification Status</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    {getStatusIcon()}
                  </div>
                  <Badge className={`${getStatusColor()} text-white mb-4`}>
                    {getStatusText()}
                  </Badge>
                  
                  {verificationStatus === 'verified' && (
                    <div className="text-sm text-gray-600">
                      <p>✓ Identity verified</p>
                      <p>✓ Full platform access</p>
                      <p>✓ Trusted seller badge</p>
                    </div>
                  )}
                  
                  {verificationStatus === 'pending' && (
                    <div className="text-sm text-gray-600">
                      <p>Verification in progress...</p>
                      <p>Usually takes 24-48 hours</p>
                    </div>
                  )}
                  
                  {verificationStatus === 'none' && (
                    <div className="text-sm text-gray-600">
                      <p>Complete verification to:</p>
                      <p>• List products for rent</p>
                      <p>• Build customer trust</p>
                      <p>• Access seller features</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card className="marketplace-card">
                <CardHeader>
                  <CardTitle>Verification Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Verified seller badge</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Higher customer trust</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Priority in search results</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Access to premium features</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NADRAVerification;
