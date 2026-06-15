"use client";

import { useAuthModal } from "../store/useAuthModalStore";
import Modal from "./Modal";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

interface RegisterValues {
  name: string;
  email: string;
  password: string;
}

type RegisterErrors = Partial<Record<keyof RegisterValues, string>>;

export default function RegisterModal() {
  const { isRegisterOpen, closeRegister, openLogin } = useAuthModal();
  const [values, setValues] = useState<RegisterValues>({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<RegisterErrors>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  };

  const validate = () => {
    const newErrors: RegisterErrors = {};

    if (!values.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (values.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    if (!values.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!values.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (values.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;
    console.log(values);
  };

  return (
    <Modal title="Register" isOpen={isRegisterOpen} onClose={closeRegister}>
      {/* header */}
      <div className="mb-6 space-y-1">
        <h2 className="text-2xl font-semibold text-gray-900">
          Welcome to Homebnb
        </h2>
        <p className="text-sm text-gray-500">Create an account</p>
      </div>

      <form onSubmit={onSubmit} className="space-y-8">
        <Input
          name="name"
          label="Name"
          type="text"
          value={values.name}
          onChange={handleChange}
          error={errors.name}
        />
        <Input
          name="email"
          label="Email"
          type="text"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
        />
        <Input
          name="password"
          label="Password"
          type="text"
          value={values.password}
          onChange={handleChange}
          error={errors.password}
        />
        <Button type="submit">Continue</Button>

        {/* divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-4  text-gray-500">Or</span>
          </div>
        </div>

        <Button type="button" variant="outline" icon={<FcGoogle size={22} />}>
          Continue with Google
        </Button>

        {/* footer */}
        <p className="text-gray-500 text-center text-sm mt-6">
          Already have an account?{" "}
          <span
            onClick={openLogin}
            className="text-primary cursor-pointer font-semibold hover:underline"
          >
            Login
          </span>
        </p>
      </form>
    </Modal>
  );
}
