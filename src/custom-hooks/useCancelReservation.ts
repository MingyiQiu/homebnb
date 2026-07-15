import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export function useCancelReservation() {
  const [loadingId, setLoadingId] = useState<null | string>(null);
  const router = useRouter();

  const cancelReservation = async (reservationId: string) => {
    try {
      setLoadingId(reservationId);

      await axios.delete(`/api/reservations/${reservationId}`);

      toast("Resevation cancelled", {
        style: { color: "white", background: "#e89d31" },
      });

      router.refresh();
    } catch (error) {
      toast("Something went wrong", {
        style: { color: "white", background: "#e89d31" },
      });
      console.log(error);
    } finally {
      setLoadingId(null);
    }
  };

  return { loadingId, cancelReservation };
}
