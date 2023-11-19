import Link from "next/link";
import Image from "next/image";
import { LinkIcon } from "../LinkIcon";

export const Footer = () => {
  return (
    <footer className="grid grid-cols-12 bg-white pb-4 pt-12">
      <Link href="/" className="col-start-3 row-start-1">
        <Image alt="" src="/logo/amatech.svg" width={100} height={100} />
      </Link>
      <div className="col-span-full row-start-1 mx-auto flex w-max flex-col items-center gap-8 pb-12">
        <div className="font-YuGothic flex w-max flex-col gap-2 text-xs font-bold tracking-wider text-amatech-log">
          <Link href="/about" className="hover:underline">
            あまてくとは？
          </Link>
        </div>
        <hr className="h-[3px] w-[140px] rounded-full border-0 bg-slate-200" />
        <div className="flex gap-6">
          <LinkIcon
            url="https://github.com/amatech-repo"
            img="/icons/github.svg"
            alt="GitHub"
          />
          <LinkIcon
            url="https://twitter.com/amatech1006"
            img="/icons/x.svg"
            alt="X"
          />
          <LinkIcon
            url="https://qiita.com/organizations/amatech"
            img="/icons/qiita.svg"
            alt="Qiita"
          />
        </div>
      </div>
      <div className="font-YuGothic col-start-1 col-end-[-1] row-start-2 text-center text-xs font-bold text-gray">
        あまてく © 2023
      </div>
    </footer>
  );
};
