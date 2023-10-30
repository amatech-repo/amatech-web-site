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
    <div className="w-full h-[1295.99px] my-10">
      <div className="absolute">
        {contetns.map((newsCard: NewsType, index: Key) => (
          <>
            <div>
              <div className="flex">
                <Image
                  src={"./images/dot.svg"}
                  alt=""
                  width={28}
                  height={29}
                  className="ml-[360px]"
                ></Image>
                <div className="mt-1/2 ml-[22px] font-YuGothic font-bold text-2xl text-cyan-950">
                  {newsCard.eventDate
                    .split("T")[0]
                    .split("-")
                    .slice(1)
                    .join("/")}
                </div>
              </div>
              <NewsCard
                key={index}
                title={newsCard.title}
                place={newsCard.place}
                imageURL={newsCard.imageURL.url ?? ""}
                isRight={true}
              />
            </div>
          </>
        ))}
      </div>
      <div className="absolute">
        <div className="relative z-[-10] w-2 h-[40rem] bg-[#D6EAF3] rounded-full ml-[369px] mt-5"></div>
      </div>
    </div>
  );
};
