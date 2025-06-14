
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface ProductExtraDetailsProps {
  vendor: string;
  material: string;
  origin: string;
  care: string;
}

export function ProductExtraDetails({ vendor, material, origin, care }: ProductExtraDetailsProps) {
  return (
    <Card className="marketplace-card">
      <CardContent className="p-6">
        <h3 className="font-semibold text-black mb-4">Product Details</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Vendor:</span>
            <span className="text-black">{vendor}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Material:</span>
            <span className="text-black">{material}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Origin:</span>
            <span className="text-black">{origin}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Care:</span>
            <span className="text-black">{care}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
