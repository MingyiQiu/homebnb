import { Suspense } from "react";
import ListingPage from "../../../components/listings/ListingPage";

export default async function Page({
  params,
}: {
  params: Promise<{ listingId: string }>;
}) {
  const listingId = (await params).listingId;
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ListingPage listingId={listingId} />
    </Suspense>
  );
}
