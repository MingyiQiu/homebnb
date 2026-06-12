"use client";

import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";
import { LuSearch, LuMenu } from "react-icons/lu";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full h-18 lg:h-24 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between h-full mx-auto w-[95%] md:w-[90%]">
        <Logo />

        {/* center navbar */}
        <div className="flex items-center gap-3">
          {/* full search bar - hidden on mobile */}
          <div className="hidden md:flex items-center gap-3 px-4 py-2 shadow-md border border-gray-200 rounded-full cursor-pointer">
            <span className="text-sm font-medium text-gray-700 hidden lg:block">
              Anywhere
            </span>

            <span className="h-6 w-px bg-gray-300 hidden md:block" />

            <span className="hidden md:block text-sm font-medium text-gray-700">
              Anyweek
            </span>

            <span className="h-6 w-px bg-gray-300 hidden md:block" />

            <span className="hidden md:block text-sm text-gray-500">
              Add guests
            </span>

            <div className="w-8 h-8 text-white rounded-full bg-primary grid place-items-center">
              <LuSearch size={16} />
            </div>
          </div>

          {/* mobile-only search button */}
          <div className="md:hidden w-9 h-9 bg-primary text-white rounded-full grid place-items-center">
            <LuSearch size={18} />
          </div>
        </div>

        {/* right navbar */}
        <div className="flex items-center gap-4 relative" ref={menuRef}>
          <button className="hidden md:block text-sm font-medium px-4 py-2 rounded-full bg-gray-50 cursor-pointer hover:bg-gray-100">
            Homebnb your home
          </button>

          <div className="flex items-center gap-2 border border-gray-300 rounded-full px-2 py-1 hover:shadow-md transition cursor-pointer">
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="h-8 w-8 grid place-items-center rounded-full hover:bg-gray-100 transition cursor-pointer"
            >
              <LuMenu size={18} />
            </button>

            <div className="relative w-8 h-8 rounded-full overflow-hidden">
              <Image
                src="/images/image.png"
                alt="user-avatar"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* dropdown menu */}
          {open && (
            <div className="absolute right-0 top-14 w-56 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden px-4 py-2">
              <ul className="text-gray-800 text-sm">
                <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                  Help Center
                </li>
                <div className="border-t my-1 border-gray-300" />
                <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                  Sign up
                </li>
                <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
                  Sign in
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
