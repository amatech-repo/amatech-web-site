import React from "react";
import Image from "next/image";

type ContentProps = {
  text: string;
};

export const Activity = () => {
  return (
    <div className="flex flex-col items-center justify-end w-full py-14 mx-auto rounded-3xl drop-shadow-lg bg-white mb-4">
      <div className="px-7 justify-center items-center gap-2.5 inline-flex">
        <div className="text-primary text-3xl font-bold">勉強会・LT会</div>
      </div>
      <div className="flex flex-col w-full justify-center items-center gap-4 sm:flex-row sm:justify-between sm:px-24">
        <div className="sm:hidden">
          <Image
            className="w-44 h-44"
            src="./icons/memo.svg"
            alt=""
            width={180}
            height={180}
          />
        </div>
        <div className="w-68 flex-col justify-center items-start inline-flex text-xl">
          <ActivityContent text={"インターンに参加してきた話"} />
          <ActivityContent text={"研究って何するの？"} />
          <ActivityContent text={"学びたい言語についての勉強会"} />
          <ActivityContent text={"逆求人イベントの使い道とススメ"} />
        </div>
        <div className="hidden sm:block">
          <Image
            className="w-44 h-44"
            src="./icons/memo.svg"
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
    <div className="justify-start items-start inline-flex">
      <Dot />
      <div className="text-primary text-xl ">{text}</div>
    </div>
  );
};

const Dot = () => {
  return (
    <div className="text-black text-2xl font-bold font-['YuGothic'] tracking-wide">
      ・
    </div>
  );
};
