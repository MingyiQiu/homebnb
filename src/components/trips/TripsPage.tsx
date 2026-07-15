import { getCurrentUser } from "../../server-actions/getCurrentUser";
import { getTrips } from "../../server-actions/getTrips";
import ListingCard from "../listings/ListingCard";
import EmptyListings from "../ui/EmptyListings";

export default async function TripsPage() {
  const trips = await getTrips();

  if (trips.length === 0) {
    return (
      <EmptyListings
        title="No trips found"
        subtitle="You haven't booked any trips yet."
      />
    );
  }

  const currentUser = await getCurrentUser();

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-6">Your Trips</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {trips.map((trip) => {
          return (
            <ListingCard
              listing={trip.listing}
              key={trip.id}
              currentUser={currentUser}
              reservation={{
                id: trip.id,
                startDate: trip.startDate,
                endDate: trip.endDate,
                totalPrice: trip.totalPrice,
              }}
              trip
              actionLabel="Cancel Trip"
            />
          );
        })}
      </div>
    </div>
  );
}
