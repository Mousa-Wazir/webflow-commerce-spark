
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface CategorySidebarProps {
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

export function CategorySidebar({ categories, selectedCategory, onCategorySelect }: CategorySidebarProps) {
  return (
    <Card className="w-64 p-6 bg-white border border-gray-200 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "ghost"}
            className={`w-full justify-start text-left ${
              selectedCategory === category
                ? 'bg-gray-900 text-white hover:bg-gray-800'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
            onClick={() => onCategorySelect(category)}
          >
            {category}
          </Button>
        ))}
      </div>
    </Card>
  );
}
