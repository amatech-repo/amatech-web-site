import React from "react";
import Image from "next/image";
import { Checkbox } from "tabler-icons-react";

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
    <div className="z-10 mx-auto flex w-full flex-col items-center justify-end rounded-3xl border-2 border-sky-100 bg-white py-10">
      <div className="text-primary pb-4 pt-2 text-2xl font-bold">{title}</div>
      <div className="flex w-full flex-col items-center gap-8 px-4 sm:flex-row sm:justify-evenly">
        <div className="rounded-x rounded-3xl p-8 shadow-xl">
          <Image
            className="h-20 w-20 sm:h-28 sm:w-28"
            src={imagePath}
            alt=""
            width={180}
            height={180}
          />
        </div>
        <div className="flex flex-col gap-2">
          {texts.map((text, i) => {
            return <ActivityContent text={text} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

// 内容
const ActivityContent = (props: ContentProps) => {
  const { text } = props;
  return (
    <div className="inline-flex items-center gap-2">
      <Checkbox className="text-amatech-log" />
      <div className="text-primary text-base font-semibold sm:text-lg">
        {text}
      </div>
    </div>
  );
};
