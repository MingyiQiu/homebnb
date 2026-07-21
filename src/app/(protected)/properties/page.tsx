import { Suspense } from "react";
import PropertiesPage from "../../../components/properties/PropertiesPage";
import ListingCardSkeleton from "../../../components/skeletions/ListingCardSkeletion";

export default function Page() {
  return (
    <Suspense fallback={<ListingCardSkeleton />}>
      <PropertiesPage />
    </Suspense>
  );
}
