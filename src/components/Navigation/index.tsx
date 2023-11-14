import Link from "next/link";
import Image from "next/image";
import {
  IconNews,
  IconHome2,
  IconBulb,
  IconMessages,
  IconShare,
} from "@tabler/icons-react";

export const Navigation = () => {
  return (
    <nav>
      <ul className="space-x-auto flex h-6 flex-row">
        <li className="flex items-center justify-start">
          <Link href="/" className="w-16 text-amatech-log">
            <Image
              src="/logo/amatech-text.svg"
              alt="あまてく"
              width={240}
              height={240}
            />
          </Link>
        </li>
        <div className="ml-auto flex items-center justify-end space-x-5">
          <LinkItems />
        </div>
      </ul>
    </nav>
  );
};

const LinkItem = (props: {
  href: string;
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
}) => {
  return (
    <Link
      onClick={props.onClick}
      href={props.href}
      className="flex items-center gap-2 p-2"
    >
      {props.icon}
      <div className="whitespace-nowrap font-semibold">{props.text}</div>
    </Link>
  );
};

export const LinkItems = ({ onClickItem }: { onClickItem?: () => void }) => {
  return (
    <>
      <LinkItem
        onClick={onClickItem}
        href="#news"
        icon={<IconNews size={20} />}
        text={"ニュース"}
      />
      <LinkItem
        onClick={onClickItem}
        href="#holding-format"
        icon={<IconHome2 size={20} />}
        text={"開催形式"}
      />
      <LinkItem
        onClick={onClickItem}
        href="#activities"
        icon={<IconBulb size={20} />}
        text={"活動内容"}
      />
      <LinkItem
        onClick={onClickItem}
        href="#faq"
        icon={<IconMessages size={20} />}
        text={"FAQ"}
      />
      <LinkItem
        onClick={onClickItem}
        href="#sns"
        icon={<IconShare size={20} />}
        text={"SNS"}
      />
    </>
  );
};
