import Link from "next/link";
import Image from "next/image";

export const Navigation = () => {
  return (
    <nav>
      <ul className="flex flex-row space-x-auto h-6">
        <li className="flex justify-start items-center">
          <Link href="/" className="text-amatech-log">
            あまてく
          </Link>
        </li>
        <div className="flex justify-end items-center ml-auto space-x-10">
          <li className="flex flex-row space-x-2">
            <Image src={"/icons/news.svg"} alt={""} width={24} height={24} />
            <Link href="/news">ニュース</Link>
          </li>
          <li className="flex flex-row space-x-2">
            <Image src={"/icons/sponsor.svg"} alt={""} width={24} height={24} />
            <Link href="/sponsor">開催形式</Link>
          </li>
          <li className="flex flex-row space-x-2">
            <Image src={"/icons/member.svg"} alt={""} width={24} height={24} />
            <Link href="/member">活動内容</Link>
          </li>
          <li className="flex flex-row space-x-2">
            <Image src={"/icons/faq.svg"} alt={""} width={24} height={24} />
            <Link href="/faq">FAQ</Link>
          </li>
          <li className="flex flex-row space-x-2">
            <Image src={"/icons/contact.svg"} alt={""} width={24} height={24} />
            <Link href="/contact">SNS</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};
