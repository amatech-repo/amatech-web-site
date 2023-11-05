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
          <LinkItem href="" icon={"/icons/news.svg"} text={"ニュース"} />
          <LinkItem href="" icon={"/icons/sponsor.svg"} text={"開催形式"} />
          <LinkItem href="" icon={"/icons/member.svg"} text={"活動内容"} />
          <LinkItem href="" icon={"/icons/faq.svg"} text={"FAQ"} />
          <LinkItem href="" icon={"/icons/contact.svg"} text={"SNS"} />
        </div>
      </ul>
    </nav>
  );
};

export const LinkItem = (props: {
  href: string;
  icon: string;
  text: string;
}) => {
  return (
    <Link href={props.href} className="flex gap-2 p-2">
      <div className="w-6 h-6">
        <Image src={props.icon} alt={""} width={24} height={24} />
      </div>
      <div className="whitespace-nowrap font-semibold">{props.text}</div>
    </Link>
  );
};
