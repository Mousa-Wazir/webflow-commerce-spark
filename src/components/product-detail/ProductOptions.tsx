
import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ProductOptionsProps {
  sizes: string[];
  colors: string[];
  isRentable: boolean;
  rentalOptions: { value: string, label: string }[];
  selectedSize: string;
  setSelectedSize: (val: string) => void;
  selectedColor: string;
  setSelectedColor: (val: string) => void;
  rentalDuration: string;
  setRentalDuration: (val: string) => void;
}

export function ProductOptions({
  sizes,
  colors,
  isRentable,
  rentalOptions,
  selectedSize,
  setSelectedSize,
  selectedColor,
  setSelectedColor,
  rentalDuration,
  setRentalDuration,
}: ProductOptionsProps) {
  return (
    <div className="space-y-4">
      {/* Size Selection */}
      <div>
        <label className="block text-sm font-medium text-black mb-2">Size</label>
        <Select value={selectedSize} onValueChange={setSelectedSize}>
          <SelectTrigger className="marketplace-input">
            <SelectValue placeholder="Select size" />
          </SelectTrigger>
          <SelectContent>
            {sizes.map((size) => (
              <SelectItem key={size} value={size}>
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {/* Color Selection */}
      <div>
        <label className="block text-sm font-medium text-black mb-2">Color</label>
        <div className="flex gap-2">
          {colors.map((color) => (
            <button
              key={color}
              type="button"
              onClick={() => setSelectedColor(color)}
              className={`px-4 py-2 rounded-md border transition-colors ${
                selectedColor === color 
                  ? 'border-black bg-black text-white' 
                  : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>
      {/* Rental Duration */}
      {isRentable && (
        <div>
          <label className="block text-sm font-medium text-black mb-2">Rental Duration</label>
          <Select value={rentalDuration} onValueChange={setRentalDuration}>
            <SelectTrigger className="marketplace-input">
              <SelectValue placeholder="Select rental period" />
            </SelectTrigger>
            <SelectContent>
              {rentalOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  )
}
