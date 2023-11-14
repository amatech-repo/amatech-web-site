"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LinkItems } from "..";
import { IconMenu2 } from "@tabler/icons-react";

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative">
      <ul className="space-x-auto flex h-6 flex-row items-center justify-between">
        <li>
          <Link href="/" className="block w-16 text-amatech-log">
            <Image
              src="/logo/amatech-text.svg"
              alt="あまてく"
              width={240}
              height={240}
            />
          </Link>
        </li>

        <li className="relative ml-auto flex items-center justify-end">
          <button onClick={toggleMenu} className="focus:outline-none">
            <IconMenu2 size={22} className="text-slate-400" />
          </button>

          {isOpen && (
            <div className="absolute top-full mt-2 rounded-lg border border-slate-100 bg-white p-4 pr-8 shadow-lg">
              <ul className="space-y-3">
                <LinkItems
                  onClickItem={() => {
                    setIsOpen(false);
                  }}
                />
              </ul>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};
