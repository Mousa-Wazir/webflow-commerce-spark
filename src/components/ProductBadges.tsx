
import { Badge } from "@/components/ui/badge";

interface ProductBadgesProps {
  isNew?: boolean;
  originalPrice?: number | null;
  isRentable?: boolean;
  isVerified?: boolean;
}

export function ProductBadges({
  isNew,
  originalPrice,
  isRentable,
  isVerified,
}: ProductBadgesProps) {
  return (
    <div>
      <div className="absolute top-2 left-2 space-y-1">
        {isNew && (
          <Badge className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">NEW</Badge>
        )}
        {originalPrice && (
          <Badge className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">SALE</Badge>
        )}
        {isRentable && (
          <Badge className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">RENTABLE</Badge>
        )}
      </div>
      {isVerified && (
        <div className="absolute top-2 right-2">
          <Badge className="bg-green-600 text-white text-xs flex items-center gap-1 px-2 py-0.5 rounded-full">VERIFIED</Badge>
        </div>
      )}
    </div>
  );
}
