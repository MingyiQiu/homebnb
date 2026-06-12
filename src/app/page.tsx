import ListingCard from "@/components/listings/ListingCard";
import Container from "@/layouts/Container";

export default function Home() {
  const listings = [
    {
      id: 1,
      title: "test",
      location: "Vancouver, Canada",
      imageSrc: "/images/image1.jpeg",
      price: 140,
    },
    {
      id: 2,
      title: "test2",
      location: "Burnaby, Canada",
      imageSrc: "/images/image2.jpeg",
      price: 150,
    },
  ];
  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {listings.map((listing) => {
          return <ListingCard key={listing.id} listing={listing} />;
        })}
      </div>
    </Container>
  );
}
