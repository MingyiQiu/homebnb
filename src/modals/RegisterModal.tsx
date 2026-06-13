"use client";

import { useAuthModal } from "@/store/useAuthModalStore";
import Modal from "./Modal";

export default function RegisterModal() {
  const { isRegisterOpen, closeRegister, openLogin } = useAuthModal();
  return (
    <Modal title="Register" isOpen={isRegisterOpen} onClose={closeRegister}>
      <p>registerModal</p>
    </Modal>
  );
}
