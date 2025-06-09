
import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductGrid } from '@/components/ProductGrid';
import { CategorySidebar } from '@/components/CategorySidebar';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const categories = [
  'All Products',
  'Home Decor',
  'Furniture', 
  'Clothing',
  'Accessories',
  'Handicrafts',
  'Health & Beauty'
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Products');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-gray-900 font-medium">
                  Products
                </BreadcrumbPage>
              </BreadcrumbItem>
              {selectedCategory !== 'All Products' && (
                <>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-gray-900 font-medium">
                      {selectedCategory}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </>
              )}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-900">Our Products</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover unique local products from verified creators. Browse by category or explore everything we have to offer.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block">
            <CategorySidebar 
              categories={categories}
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
            />
          </div>

          {/* Mobile/Tablet Category Tabs */}
          <div className="lg:hidden">
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
              <TabsList className="grid w-full grid-cols-3 sm:grid-cols-4 md:grid-cols-7 bg-white border border-gray-200">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    className="text-xs sm:text-sm text-gray-600 data-[state=active]:bg-gray-900 data-[state=active]:text-white"
                  >
                    {category === 'All Products' ? 'All' : category.split(' ')[0]}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <ProductGrid selectedCategory={selectedCategory} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
