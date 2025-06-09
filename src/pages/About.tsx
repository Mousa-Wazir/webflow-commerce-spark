
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Users, Heart, CheckCircle } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Trust & Safety',
      description: 'All vendors are verified through NADRA ensuring secure transactions and authentic products.'
    },
    {
      icon: Users,
      title: 'Local Community',
      description: 'Supporting local artisans and creators while connecting communities through shared creativity.'
    },
    {
      icon: Heart,
      title: 'Quality Products',
      description: 'Handpicked items from verified sellers ensuring quality and uniqueness in every rental.'
    },
    {
      icon: CheckCircle,
      title: 'Easy Process',
      description: 'Simple rental process with transparent pricing and flexible duration options.'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Browse Products',
      description: 'Explore our curated collection of local products across various categories.'
    },
    {
      number: '02',
      title: 'Select & Rent',
      description: 'Choose your preferred item, select rental duration, and proceed with booking.'
    },
    {
      number: '03',
      title: 'Enjoy & Return',
      description: 'Use the product for your chosen duration and return it as per the rental terms.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              About LocalRent
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're revolutionizing how people access and share local creativity. Our platform connects 
              communities by making unique, handcrafted products accessible through flexible rental options.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="marketplace-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-black mb-4">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  To empower local artisans and creators by providing a platform where their unique 
                  products can reach a wider audience through innovative rental solutions. We believe 
                  in making creativity accessible while supporting sustainable consumption.
                </p>
              </CardContent>
            </Card>
            
            <Card className="marketplace-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-black mb-4">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed">
                  To become the leading marketplace for local creative products, fostering community 
                  connections and promoting sustainable practices through shared access to quality, 
                  handcrafted items.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Why Choose LocalRent?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've built our platform with trust, quality, and community at its core.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="marketplace-card text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="font-semibold text-black mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Getting started with LocalRent is simple and straightforward.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.number}
                </div>
                <h3 className="font-semibold text-black mb-2 text-lg">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="marketplace-card">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <Shield className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-black mb-4">Trust & Safety</h2>
                  <p className="text-gray-600">
                    Your security and trust are our top priorities. We've implemented comprehensive 
                    verification processes to ensure a safe marketplace experience.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-black mb-3">NADRA Verification</h3>
                    <p className="text-gray-600 mb-4">
                      All vendors undergo mandatory NADRA verification to confirm their identity 
                      and ensure legitimate business operations.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Identity verification through CNIC</li>
                      <li>• Background checks for sellers</li>
                      <li>• Secure payment processing</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-black mb-3">Quality Assurance</h3>
                    <p className="text-gray-600 mb-4">
                      Every product is reviewed and approved before being listed on our platform 
                      to maintain quality standards.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Product quality verification</li>
                      <li>• Seller rating and review system</li>
                      <li>• Return and refund policies</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
