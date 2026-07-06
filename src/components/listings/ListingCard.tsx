import Image from "next/image";
import { Listing } from "@prisma/client";
import useCountries from "../../custom-hooks/useCountries";
import HeartButton from "../favorites/HeartButton";

interface ListingCardProps {
  listing: Listing;
  currentUser?: {
    id: string;
    favoriteIds: string[];
  } | null;

  hideFavoriteButton?: boolean;
}

export default function ListingCard({
  listing,
  currentUser,
  hideFavoriteButton,
}: ListingCardProps) {
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
        {!hideFavoriteButton && (
          <HeartButton listingId={listing.id} currentUser={currentUser} />
        )}
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
