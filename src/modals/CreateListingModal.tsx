"use client";

import { useState } from "react";
import { useCreateListingModal } from "../store/useCreateListingModal";
import Modal from "./Modal";
import Button from "../components/ui/Button";

const STEPS = {
  CATEGORY: 0,
  LOCATION: 1,
  COUNTERS: 2,
  DETAILS: 3,
  IMAGES: 4,
  PRICE: 5,
};

export default function CreateListingModal() {
  const { isOpen, close } = useCreateListingModal();
  const [step, setStep] = useState(STEPS.CATEGORY);

  const stepTitle = () => {
    switch (step) {
      case STEPS.CATEGORY:
        return "Which of these best describes your place?";
      case STEPS.LOCATION:
        return "Where is your place located?";
      case STEPS.COUNTERS:
        return "Share some basics about your place";
      case STEPS.DETAILS:
        return "How would you describe your place?";
      case STEPS.IMAGES:
        return "Add photos of your place";
      case STEPS.PRICE:
        return "How much do you charge per night?";
      default:
        return "";
    }
  };

  const createListing = async () => {
    alert("form submitted!");
  };

  return (
    <Modal isOpen={isOpen} onClose={close} title="Create a new listing">
      {/* step indicator */}
      <div className="mb-7 flex items-center justify-between text-sm text-gray-500">
        <span>Step {step + 1} of 6</span>
        <span className="font-medium text-gray-700">{stepTitle()}</span>
      </div>

      {/* footer */}
      <div className="mt-8 flex gap-3">
        {step > STEPS.CATEGORY && (
          <Button onClick={() => setStep((prev) => prev - 1)} variant="outline">
            Back
          </Button>
        )}

        <Button
          onClick={() =>
            step < STEPS.PRICE ? setStep((prev) => prev + 1) : createListing()
          }
        >
          {step === STEPS.PRICE ? "Create listing" : "Next"}
        </Button>
      </div>
    </Modal>
  );
}
