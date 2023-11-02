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
        <div className="flex justify-end items-center ml-auto space-x-5">
          <LinkItem href={"/icons/news.svg"} text={"ニュース"} />
          <LinkItem href={"/icons/sponsor.svg"} text={"開催形式"} />
          <LinkItem href={"/icons/member.svg"} text={"活動内容"} />
          <LinkItem href={"/icons/faq.svg"} text={"FAQ"} />
          <LinkItem href={"/icons/contact.svg"} text={"SNS"} />
        </div>
      </ul>
    </nav>
  );
};

export const LinkItem = (props: { href: string; text: string }) => {
  return (
    <Link href="/news" className="flex gap-2">
      <div className="flex gap-2 p-2">
        <Image src={props.href} alt={""} width={24} height={24} />
        {props.text}
      </div>
    </Link>
  );
};
