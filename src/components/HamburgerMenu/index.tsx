"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <ul className="flex flex-row space-x-auto h-6">
        <li className="flex justify-start items-center">
          <Link href="/" className="text-amatech-log">
            あまてく
          </Link>
        </li>

        <div className="flex justify-end items-center ml-auto space-x-10">
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center px-3 py-2 border rounded"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z" />
            </svg>
          </button>

          <div
            className={`md:flex items-center ${isOpen ? "block" : "hidden"}`}
          >
            <Link href="/news">ニュース</Link>
          </div>
        </div>
      </ul>
    </nav>
  );
};
