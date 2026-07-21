import { Suspense } from "react";
import FavoritesPage from "../../../components/favorites/FavoritesPage";
import ListingCardSkeleton from "../../../components/skeletions/ListingCardSkeletion";

export default function Page() {
  return (
    <Suspense fallback={<ListingCardSkeleton />}>
      <FavoritesPage />
    </Suspense>
  );
}
