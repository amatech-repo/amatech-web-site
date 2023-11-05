import Link from "next/link";
import Image from "next/image";

export const Navigation = () => {
  return (
    <nav>
      <ul className="space-x-auto flex h-6 flex-row">
        <li className="flex items-center justify-start">
          <Link href="/" className="text-amatech-log w-16">
            <Image src="/logo/amatech-text.svg" alt="あまてく" width={240} height={240} />
          </Link>
        </li>
        <div className="ml-auto flex items-center justify-end space-x-5">
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
      <div className="h-6 w-6">
        <Image src={props.icon} alt={""} width={24} height={24} />
      </div>
      <div className="whitespace-nowrap font-semibold">{props.text}</div>
    </Link>
  );
};
