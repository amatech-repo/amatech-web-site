import React from "react";
import { NewsCard } from "./NewsCard";
import Image from "next/image";
type NewsCard = {
  title: string;
  place: string;
  day: string;
  imageMaruPath: string;
  imageNewsPath: string;
  isRight: boolean;
};

type NewsCards = {
  newsCards: NewsCard[];
};

export const NewsList = ({ newsCards }: NewsCards) => {
  return (
    <div className="w-[732px] h-[1295.99px] relative">
      <div className="absolute z-[1]">
        {newsCards.map((newsCard, index) => (
          <NewsCard
            key={index}
            title={newsCard.title}
            place={newsCard.place}
            day={newsCard.day}
            imageMaruPath={newsCard.imageMaruPath}
            imageNewsPath={newsCard.imageNewsPath}
            isRight={newsCard.isRight}
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
