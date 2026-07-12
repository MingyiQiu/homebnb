import { Suspense } from "react";
import FavoritesPage from "../../../components/favorites/FavoritesPage";

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <FavoritesPage />
    </Suspense>
  );
}
