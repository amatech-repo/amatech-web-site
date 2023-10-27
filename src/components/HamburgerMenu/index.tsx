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

        <div className="relative flex justify-end items-center ml-auto space-x-10">
          <button onClick={toggleMenu} className="focus:outline-none">
            <Image
              src="/icons/hamburger.svg"
              alt="Menu"
              width={32}
              height={32}
            />
          </button>

          {isOpen && (
            <div className="absolute top-[-10px] left-[-200px] bg-white border rounded-lg p-4 w-[200px] shadow-lg">
              <ul className="space-y-3">
                <li>
                  <Image
                    src="/icons/home.svg"
                    alt="ホーム"
                    width={24}
                    height={24}
                  />
                  <Link href="/">ホーム</Link>
                </li>
                <li>
                  <Image
                    src="/icons/heart.svg"
                    alt="スポンサー"
                    width={24}
                    height={24}
                  />
                  <Link href="/sponsor">スポンサー</Link>
                </li>
                <li>
                  <Image
                    src="/icons/user.svg"
                    alt="運営メンバー"
                    width={24}
                    height={24}
                  />
                  <Link href="/member">運営メンバー</Link>
                </li>
                <li>
                  <Image
                    src="/icons/faq.svg"
                    alt="FAQ"
                    width={24}
                    height={24}
                  />
                  <Link href="/faq">FAQ</Link>
                </li>
                <li>
                  <Image
                    src="/icons/contact.svg"
                    alt="お問い合わせ"
                    width={24}
                    height={24}
                  />
                  <Link href="/contact">お問い合わせ</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </ul>
    </nav>
  );
};
