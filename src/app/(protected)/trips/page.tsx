import { Suspense } from "react";
import ListingCardSkeleton from "../../../components/skeletions/ListingCardSkeletion";
import TripsPage from "../../../components/trips/TripsPage";

export default function page() {
  return (
    <Suspense fallback={<ListingCardSkeleton />}>
      <TripsPage />
    </Suspense>
  );
}
