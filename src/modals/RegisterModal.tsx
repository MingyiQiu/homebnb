"use client";

import { useAuthModal } from "@/store/useAuthModalStore";
import Modal from "./Modal";
import Input from "@/components/ui/Input";

export default function RegisterModal() {
  const { isRegisterOpen, closeRegister, openLogin } = useAuthModal();
  return (
    <Modal title="Register" isOpen={isRegisterOpen} onClose={closeRegister}>
      {/* header */}
      <div className="mb-6 space-y-1">
        <h2 className="text-2xl font-semibold text-gray-900">
          Welcome to Homebnb
        </h2>
        <p className="text-sm text-gray-500">Create an account</p>
      </div>

      <form className="space-y-8">
        <Input
          name="name"
          label="Name"
          type="text"
          value={""}
          onChange={() => {}}
        />
        <Input
          name="email"
          label="Email"
          type="text"
          value={""}
          onChange={() => {}}
        />
        <Input
          name="password"
          label="Password"
          type="text"
          value={""}
          onChange={() => {}}
        />
      </form>
    </Modal>
  );
}
