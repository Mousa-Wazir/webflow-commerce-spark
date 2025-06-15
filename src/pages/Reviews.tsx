
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Store, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";

type ReviewDetail = {
  id: number;
  user: string;
  rating: number;
  comment: string;
  date: string;
  product: {
    name: string;
    image: string;
    link: string;
  };
  store: {
    name: string;
    logo: string;
    description: string;
    link: string;
  };
};

const mockReviewDetail: ReviewDetail = {
  id: 1,
  user: "Ayesha Malik",
  rating: 5,
  comment:
    "Absolutely loved this handmade vase! The quality is top-notch, delivery was fast, and the packaging was great. The seller also provided excellent support and followed up to make sure I was satisfied. Would definitely buy again!",
  date: "2025-06-01",
  product: {
    name: "Handmade Ceramic Vase",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=420&q=80",
    link: "/products/1",
  },
  store: {
    name: "Creative Ceramics",
    logo: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=96&q=80",
    description:
      "A store specializing in beautiful, handcrafted ceramic decor. All products are made by local artisans with love.",
    link: "/stores/creative-ceramics",
  },
};

export default function Reviews() {
  const navigate = useNavigate();
  const review = mockReviewDetail;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 flex items-center justify-center px-2 py-10">
      <main className="w-full max-w-3xl animate-fade-in">
        <Button variant="outline" size="sm" className="mb-4" onClick={() => navigate(-1)}>
          ← Back
        </Button>
        <Card className="rounded-2xl shadow-lg border border-gray-200 bg-white/60 backdrop-blur-md transition card-hover">
          {/* Product & Store Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 pb-0">
            {/* Product */}
            <div className="flex flex-col items-center flex-1">
              <div className="rounded-xl overflow-hidden w-28 h-28 shadow-lg bg-gray-100 border border-gray-200">
                <img
                  src={review.product.image}
                  alt={review.product.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="mt-3 px-3 text-gray-700 font-semibold hover:underline"
                onClick={() => navigate(review.product.link)}
              >
                <ShoppingBag className="w-4 h-4 mr-1 text-gray-500" />
                {review.product.name}
              </Button>
            </div>
            {/* Divider */}
            <div className="hidden md:block w-px bg-gray-200 mx-2" style={{ minHeight: 100 }} />
            {/* Store */}
            <div className="flex flex-col items-center flex-1">
              <div className="rounded-full overflow-hidden w-20 h-20 shadow-md border border-gray-200 bg-white mb-1">
                <img
                  src={review.store.logo}
                  alt={review.store.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="mt-2 px-3 text-gray-700 font-semibold hover:underline"
                onClick={() => navigate(review.store.link)}
              >
                <Store className="w-4 h-4 mr-1 text-indigo-600" />
                {review.store.name}
              </Button>
              <div className="text-xs text-gray-500 text-center max-w-xs mt-1 px-2">{review.store.description}</div>
            </div>
          </div>
          {/* Review Detail */}
          <CardHeader className="pt-4 flex flex-col items-center pb-1">
            <CardTitle className="w-full text-center mb-1 text-2xl font-extrabold tracking-tight">
              Customer Review
            </CardTitle>
            <div className="flex flex-col items-center mb-0.5 gap-0.5">
              <span className="font-semibold text-base text-gray-800">{review.user}</span>
              <div className="flex items-center gap-1 mt-1">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="w-5 h-5 drop-shadow"
                    fill={idx < review.rating ? "#facc15" : "none"}
                    color={idx < review.rating ? "#facc15" : "#d1d5db"}
                    strokeWidth={idx < review.rating ? 0 : 2}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-400">{review.rating}/5</span>
              </div>
            </div>
            <div className="text-xs text-gray-400">{new Date(review.date).toLocaleDateString()}</div>
          </CardHeader>
          <CardContent className="pt-0 px-6 pb-6">
            <div className="bg-gray-50/80 border border-gray-200 rounded-lg shadow-md p-5 mt-3 min-h-[80px] flex items-center">
              <span className="text-gray-700 text-base">{review.comment}</span>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

