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
                <li className="flex items-center space-x-2">
                  <Image
                    src="/icons/news.svg"
                    alt="ニュース"
                    width={24}
                    height={24}
                  />
                  <Link href="/">ニュース</Link>
                </li>
                <li className="flex items-center space-x-2">
                  <Image
                    src="/icons/sponsor.svg"
                    alt="スポンサー"
                    width={20}
                    height={20}
                  />
                  <Link href="/sponsor">開催形式</Link>
                </li>
                <li className="flex items-center space-x-2">
                  <Image
                    src="/icons/member.svg"
                    alt="運営メンバー"
                    width={24}
                    height={24}
                  />
                  <Link href="/member">活動内容</Link>
                </li>
                <li className="flex items-center space-x-2">
                  <Image
                    src="/icons/faq.svg"
                    alt="FAQ"
                    width={24}
                    height={24}
                  />
                  <Link href="/faq">FAQ</Link>
                </li>
                <li className="flex items-center space-x-2">
                  <Image
                    src="/icons/contact.svg"
                    alt="お問い合わせ"
                    width={24}
                    height={24}
                  />
                  <Link href="/contact">SNS</Link>
                </li>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};
