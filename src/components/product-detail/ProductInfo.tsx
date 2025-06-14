
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Shield, Star } from "lucide-react";

interface ProductInfoProps {
  name: string;
  category: string;
  isVerified: boolean;
  rating: number;
  description: string;
}

export function ProductInfo({ name, category, isVerified, rating, description }: ProductInfoProps) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <Badge variant="secondary" className="text-xs">
          {category}
        </Badge>
        {isVerified && (
          <Badge className="bg-green-600 text-white text-xs flex items-center gap-1">
            <Shield className="h-3 w-3" />
            VERIFIED
          </Badge>
        )}
      </div>
      <h1 className="text-3xl font-bold text-black mb-2">{name}</h1>
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-4 w-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
            />
          ))}
        </div>
        <span className="text-sm text-gray-600">({rating})</span>
      </div>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}
