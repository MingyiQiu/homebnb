import { Suspense } from "react";
import Listings from "../components/listings/Listings";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Home(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Listings searchParams={searchParams} />
    </Suspense>
  );
}
