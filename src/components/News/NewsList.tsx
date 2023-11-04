import { NewsCard } from "./NewsCard";
import Image from "next/image";
import { NewsListType, NewsType } from "@/types/news";
import Link from "next/link";

type NewsCardListProps = {
  newsCards: NewsListType | undefined;
};

export const NewsList = ({ newsCards }: NewsCardListProps) => {
  const contents = newsCards?.contents ?? [];
  return (
    <div className="relative w-full">
      {contents.map((newsCard: NewsType, index) => (
        <div
          key={index}
          className="flex flex-col items-center first:pt-10 mb-14 relative"
        >
          <div className="mb-6 items-center relative text-center w-full grid grid-cols-[auto,24px,auto]">
            {/* dot */}
            <div className="row-start-1 col-span-full flex justify-center">
              <div className="w-6 h-6 bg-white rounded-full border-background-object border-[6px] z-40"></div>
            </div>
            {/* date */}
            <div className="col-start-1 row-start-1 font-bold text-2xl">
              {newsCard.eventDate.split("T")[0].split("-").slice(1).join("/")}
            </div>
          </div>

          <NewsCard
            title={newsCard.title}
            place={newsCard.place}
            imageURL={newsCard.imageURL.url ?? ""}
            isRight={index % 2 === 0}
          />
        </div>
      ))}
      <div className="flex">
        <Link
          href="/news"
          className="bg-white rounded-full border-4 border-background-object px-7 py-3 mx-auto z-10"
        >
          もっと見る
        </Link>
      </div>

      {/* vertical axis */}
      <div className="absolute w-2 h-full bg-background-object rounded-full top-0 left-1/2 -translate-x-1/2 z-0"></div>
    </div>
  );
};
