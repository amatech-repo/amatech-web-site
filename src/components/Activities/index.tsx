import React from "react";
import Image from "next/image";

type Props = {
  imagePath: string;
  title: string;
  texts: string[];
};

type ContentProps = {
  text: string;
};

export const Activity = (props: Props) => {
  const { imagePath, title, texts } = props;
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-end rounded-3xl bg-white py-14 drop-shadow-lg">
      <div className="inline-flex items-center justify-center gap-2.5 px-7">
        <div className="text-primary text-3xl font-bold">{title}</div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between sm:px-24">
        <div className="sm:hidden">
          <Image
            className="h-44 w-44"
            src={imagePath}
            alt=""
            width={180}
            height={180}
          />
        </div>
        <div className="w-68 inline-flex flex-col items-start justify-center text-xl">
          <ActivityContent text={texts[0]} />
          <ActivityContent text={texts[1]} />
          <ActivityContent text={texts[2]} />
          <ActivityContent text={texts[3]} />
        </div>
        <div className="hidden sm:block">
          <Image
            className="h-44 w-44"
            src={imagePath}
            alt=""
            width={180}
            height={180}
          />
        </div>
      </div>
    </div>
  );
};

// 内容
const ActivityContent = (props: ContentProps) => {
  const { text } = props;
  return (
    <div className="inline-flex items-start justify-start">
      <Dot />
      <div className="text-primary text-xl ">{text}</div>
    </div>
  );
};

const Dot = () => {
  return (
    <div className="font-['YuGothic'] text-2xl font-bold tracking-wide text-black">
      ・
    </div>
  );
};
