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
      <ul className="space-x-auto flex h-6 flex-row items-center justify-between">
        <li>
          <Link href="/" className="text-amatech-log">
            あまてく
          </Link>
        </li>

        <li className="relative ml-auto flex items-center justify-end">
          <button onClick={toggleMenu} className="focus:outline-none">
            <Image
              src="/icons/hamburger.svg"
              alt="Menu"
              width={24}
              height={24}
            />
          </button>

          {isOpen && (
            <div className="absolute top-full mt-2 rounded-lg border border-slate-100 bg-white p-4 pr-8 shadow-lg">
              <ul className="space-y-3">
                <LinkItem
                  href="/news"
                  icon={"/icons/news.svg"}
                  text={"ニュース"}
                />
                <LinkItem
                  href="/#holding-format"
                  icon={"/icons/sponsor.svg"}
                  text={"開催形式"}
                />
                <LinkItem
                  href="/about"
                  icon={"/icons/member.svg"}
                  text={"活動内容"}
                />
                <LinkItem href="/#faq" icon={"/icons/faq.svg"} text={"FAQ"} />
                <LinkItem
                  href="/#sns"
                  icon={"/icons/contact.svg"}
                  text={"SNS"}
                />
              </ul>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};
