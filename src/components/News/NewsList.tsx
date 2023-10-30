import React, { Key } from "react";
import { NewsCard } from "./NewsCard";
import Image from "next/image";
import { NewsListType, NewsType } from "@/types/news";

type NewsCardListProps = {
  newsCards: NewsListType | undefined;
};

export const NewsList = ({ newsCards }: NewsCardListProps) => {
  const contetns = newsCards?.contents ?? [];
  return (
    <div className="w-[732px] h-[1295.99px] relative">
      <div className="absolute z-[1]">
        {contetns.map((newsCard: NewsType, index: Key) => (
          <NewsCard
            key={index}
            title={newsCard.title}
            place={newsCard.place}
            eventDate={newsCard.eventDate}
            imageNewsPath={""}
            isRight={false}
          />
        ))}
      </div>
      <Image
        src={"/icons/Ziku.svg"}
        alt=""
        width={8}
        height={1275}
        className="absolute z-[0] ml-[369px]"
      ></Image>
    </div>
  );
};
