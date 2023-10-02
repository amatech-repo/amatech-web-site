import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  place: string;
  day: string;
  imageMaruPath: string;
  imageNewsPath: string;
  isRight: boolean;
};

export const NewsCard = (props: Props) => {
  const { title, place, day, imageMaruPath, imageNewsPath, isRight } = props;
  return (
    <div className="w-[732px] h-[202px] bg-sky-500">
      <div className="flex ">
        <Image
          src={imageMaruPath}
          alt=""
          width={28}
          height={29}
          className="ml-[360px]"
        ></Image>
        <div className="mt-1/2 ml-[22px] font-YuGothic font-bold text-2xl text-cyan-950">
          {day}
        </div>
      </div>
      <div className="relative">
        <Image
          src={imageNewsPath}
          alt=""
          width={732}
          height={183}
          className="absolute"
        ></Image>
        <div className="absolute ml-[321px] mt-[68.99px]">
          <div className="text-xl font-bold font-YuGothic">{title}</div>
          <div className="text-neutral-400">{place}</div>
        </div>
      </div>
    </div>
  );
};
