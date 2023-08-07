import Link from "next/link";
import Image from "next/image";
import { LinkIcon } from "../LinkIcon";

export const Footer = () => {
  return (
    <footer className="bg-white grid grid-cols-12 pt-12 pb-4">
      <Link href="/" className="row-start-1 col-start-3">
        <Image alt="" src="/logo/amatech.svg" width={100} height={100} />
      </Link>
      <div className="flex flex-col items-center gap-8 col-span-full row-start-1 w-max mx-auto pb-12">
        <div className="flex flex-col gap-2 text-xs w-max text-amatech-log font-bold font-YuGothic tracking-wider">
          <Link href="/about" className="hover:underline">
            あまてくとは？
          </Link>
        </div>
        <hr className="h-[3px] w-[140px] rounded-full border-0 bg-slate-200" />
        <div className="flex gap-6">
          <LinkIcon
            url="https://twitter.com/amatech1006"
            img="/icons/twitter.svg"
            alt="Twitter"
          />
          <LinkIcon
            url="https://github.com/amatech-repo"
            img="/icons/github.svg"
            alt="GitHub"
          />
          <LinkIcon
            url="https://qiita.com/organizations/amatech"
            img="/icons/qiita.svg"
            alt="Qiita"
          />
        </div>
      </div>
      <div className="row-start-2 col-start-1 col-end-[-1] text-center text-xs font-YuGothic text-gray font-bold">
        あまてく © 2023
      </div>
    </footer>
  );
};
