"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LinkItem } from "..";

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative">
      <ul className="flex flex-row space-x-auto h-6 justify-between items-center">
        <li>
          <Link href="/" className="text-amatech-log">
            あまてく
          </Link>
        </li>

        <li className="relative flex justify-end items-center ml-auto space-x-10">
          <button onClick={toggleMenu} className="focus:outline-none">
            <Image
              src="/icons/hamburger.svg"
              alt="Menu"
              width={32}
              height={32}
            />
          </button>

          {isOpen && (
            <div className="absolute top-full right-0 mt-2 bg-white border rounded-lg p-4 w-[200px] shadow-lg">
              <ul className="space-y-3">
                <LinkItem href={"/icons/news.svg"} text={"ニュース"} />
                <LinkItem href={"/icons/sponsor.svg"} text={"開催形式"} />
                <LinkItem href={"/icons/member.svg"} text={"活動内容"} />
                <LinkItem href={"/icons/faq.svg"} text={"FAQ"} />
                <LinkItem href={"/icons/contact.svg"} text={"SNS"} />
              </ul>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};
