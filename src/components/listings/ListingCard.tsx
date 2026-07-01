import Image from "next/image";
import { LuHeart } from "react-icons/lu";
import { Listing } from "@prisma/client";
import useCountries from "../../custom-hooks/useCountries";

interface ListingCardProps {
  listing: Listing;
}

export default function ListingCard({ listing }: ListingCardProps) {
  const { getByValue } = useCountries();
  const location = getByValue(listing.locationValue);

  return (
    <div className="group cursor-pointer">
      {/* image */}
      <div className="relative aspect-square rounded-xl overflow-hidden">
        <Image
          src={listing.imageSrc || ""}
          alt={listing.title}
          fill
          className="object-cover transition group-hover:scale-105"
        />
        <button className="absolute top-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white shadow cursor-pointer">
          <LuHeart size={18} className="text-gray-700" />
        </button>
      </div>
      <div className="space-y-1 mt-3 text-sm">
        <p className="text-gray-500">
          {location
            ? `${location.label}, ${location.region}`
            : listing.locationValue}
        </p>
        <p className="text-gray-900 truncate">{listing.title}</p>
        <p className="pt-1">
          <span className="font-semibold text-gray-900">${listing.price}</span>{" "}
          /<span className="text-gray-500">night</span>
        </p>
      </div>
    </div>
  );
}
