import React from "react";
import Image from "next/image";

interface Props {
  title: string;
  place: string;
  eventDate: string;
  imageNewsPath: string;
  isRight: boolean;
}

export const NewsCard = (props: Props) => {
  const { title, place, eventDate, imageNewsPath, isRight } = props;
  const day = eventDate.split("T")[0].split("-").slice(1).join("/");

  return (
    <>
      {isRight ? (
        <div className="w-[732px] h-[202px] my-[76px]">
          <div className="flex ">
            <Image
              src={"./images/dot.svg"}
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
              width={200}
              height={200}
              className="absolute"
            ></Image>
            <div className="absolute ml-[321px] mt-[68.99px]">
              <div className="text-xl font-bold font-YuGothic">{title}</div>
              <div className="text-neutral-400">{place}</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[732px] h-[202px] my-[76px]">
          <div className="flex">
            <div className="mt-1/2 ml-[272px] font-YuGothic font-bold text-2xl text-cyan-950">
              {day}
            </div>
            <Image
              src={"./images/dot.svg"}
              alt=""
              width={28}
              height={29}
              className="ml-[34px]"
            ></Image>
          </div>
          <div className="relative">
            <Image
              src={imageNewsPath}
              alt=""
              width={732}
              height={183}
              className="absolute"
            ></Image>
            <div className="absolute ml-[98px] mt-[68.99px]">
              <div className="text-xl font-bold font-YuGothic">{title}</div>
              <div className="text-neutral-400">{place}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
