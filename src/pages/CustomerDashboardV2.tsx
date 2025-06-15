
import { useState } from "react";
import { HeaderBar } from "@/components/customer-dashboard/HeaderBar";
import { SearchBar, SearchQuery } from "@/components/customer-dashboard/SearchBar";
import { ProductCardList, ProductData } from "@/components/customer-dashboard/ProductCardList";

const initialProducts: ProductData[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80",
    title: "Designer Handbag",
    category: "Accessories",
    price: 149,
    rating: 4.8,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&q=80",
    title: "Handwoven Wall Art",
    category: "Home Decor",
    price: 25,
    rating: 4.5,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&q=80",
    title: "Wooden Coffee Table",
    category: "Furniture",
    price: 299,
    rating: 4.9,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&q=80",
    title: "Traditional Dress",
    category: "Clothing",
    price: 99,
    rating: 4.7,
  },
];

export default function CustomerDashboardV2() {
  const [products] = useState(initialProducts);
  const [search, setSearch] = useState<SearchQuery>({ term: "", category: "All" });

  // Filter products based on search term and category
  const filtered = products.filter(p => {
    const matchesTerm = p.title.toLowerCase().includes(search.term.toLowerCase());
    const matchesCat = search.category === "All" || p.category === search.category;
    return matchesTerm && matchesCat;
  });

  return (
    <div className="bg-gray-50 min-h-screen w-full">
      <HeaderBar />
      <main className="max-w-6xl mx-auto px-2 sm:px-6 py-4">
        <SearchBar search={search} setSearch={setSearch} categories={["All", ...Array.from(new Set(products.map(p => p.category)))]} />
        <div className="mt-8">
          <ProductCardList products={filtered} />
        </div>
      </main>
    </div>
  )
}
