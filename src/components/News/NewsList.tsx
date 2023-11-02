import React, { Key } from "react";
import { NewsCard } from "./NewsCard";
import Image from "next/image";
import { NewsListType, NewsType } from "@/types/news";

type NewsCardListProps = {
  newsCards: NewsListType | undefined;
};

export const NewsList = ({ newsCards }: NewsCardListProps) => {
  const contents = newsCards?.contents && [];
  return (
    <div className=" w-full h-[50rem] my-10">
      <div className="absolute">
        {contents &&
          contents.map((newsCard: NewsType, index: Key) => (
            <>
              <div>
                <div className="flex flex-col justify-center w-5/6 items-center">
                  <div className="relative">
                    {/* Dot Image (Centered) */}
                    <Image
                      src={"./images/dot.svg"}
                      alt=""
                      width={28}
                      height={28}
                      className="absolute top-0 left-2 right-2 bottom-0 mx-auto"
                    />

                    {/* Date (Right of the Dot) */}
                    <div className=" ml-[112px] mb-[15px] pb-5 font-YuGothic font-bold text-2xl text-cyan-950">
                      {newsCard.eventDate
                        .split("T")[0]
                        .split("-")
                        .slice(1)
                        .join("/")}
                    </div>
                  </div>

                  {/* NewsCard */}
                  <NewsCard
                    key={index}
                    title={newsCard.title}
                    place={newsCard.place}
                    imageURL={newsCard.imageURL.url ?? ""}
                    isRight={true}
                  />
                </div>
              </div>
            </>
          ))}
      </div>
      <div className="flex justify-center">
        <div className="absolute">
          <div className="flex justify-center items-center">
            <div className="relative z-[-10] w-2 h-[40rem] bg-[#D6EAF3] rounded-full mt-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
