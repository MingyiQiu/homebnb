import { Suspense } from "react";
import ReservationPage from "../../../components/reservations/ReservationPage";
import ListingCardSkeleton from "../../../components/skeletions/ListingCardSkeletion";

export default function page() {
  return (
    <Suspense fallback={<ListingCardSkeleton />}>
      <ReservationPage />
    </Suspense>
  );
}
