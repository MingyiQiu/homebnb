import { Suspense } from "react";
import ListingPage from "../../../components/listings/ListingPage";
import ListingViewSkeleton from "../../../components/skeletions/ListingViewSkeletion";

export default async function Page({
  params,
}: {
  params: Promise<{ listingId: string }>;
}) {
  const listingId = (await params).listingId;
  return (
    <Suspense fallback={<ListingViewSkeleton />}>
      <ListingPage listingId={listingId} />
    </Suspense>
  );
}
