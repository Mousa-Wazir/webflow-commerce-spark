
import { ProductCard } from "./ProductCard";

export type ProductData = {
  id: number;
  image: string;
  title: string;
  category: string;
  price: number;
  rating: number;
};

interface ProductCardListProps {
  products: ProductData[];
}

export function ProductCardList({ products }: ProductCardListProps) {
  return (
    <div className="w-full">
      {products.length === 0 ? (
        <div className="text-center text-xl mt-12 text-gray-500">No products found.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((prod) => <ProductCard product={prod} key={prod.id} />)}
        </div>
      )}
    </div>
  )
}
