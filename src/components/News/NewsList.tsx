import React from "react";
import { NewsCard } from "./NewsCard";
import Image from "next/image";
import { NewsListType, NewsType } from "@/types/news";

type NewsCardListProps = {
  newsCards: NewsListType | undefined;
};

export const NewsList = ({ newsCards }: NewsCardListProps) => {
  const contents = newsCards?.contents ?? [];
  return (
    <div className="relative w-full my-10">
      {/* News Cards and Dots */}
      <div className="flex flex-col items-center relative z-10">
        {contents.map((newsCard: NewsType, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-5/6 mb-8 relative"
          >
            <div className="flex items-center mb-2 relative text-center w-full">
              {/* Dot Image */}
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <Image
                  src={"/images/dot.svg"}
                  alt=""
                  width={28}
                  height={28}
                  className="relative"
                />
              </div>

              {/* Date (Left of the Dot) */}
              <div
                className="font-YuGothic font-bold text-2xl text-cyan-950 absolute"
                style={{ right: "50%", marginRight: "28px" }}
              >
                {newsCard.eventDate.split("T")[0].split("-").slice(1).join("/")}
              </div>
            </div>

            {/* NewsCard */}
            <NewsCard
              title={newsCard.title}
              place={newsCard.place}
              imageURL={newsCard.imageURL.url ?? ""}
              isRight={true}
            />
          </div>
        ))}
      </div>

      {/* Ziku image */}
      <Image
        src={"/icons/Ziku.svg"}
        alt=""
        width={10}
        height={10}
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 sm:h-[1100px] h-[1500px]"
      />
    </div>
  );
};
