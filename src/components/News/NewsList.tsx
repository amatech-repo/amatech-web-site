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
          className="relative mb-14 flex flex-col items-center first:pt-10"
        >
          <div className="relative mb-6 grid w-full grid-cols-[auto,24px,auto] items-center text-center">
            {/* dot */}
            <div className="col-span-full row-start-1 flex justify-center">
              <div className="z-40 h-6 w-6 rounded-full border-[6px] border-background-object bg-white"></div>
            </div>
            {/* date */}
            <div className="col-start-1 row-start-1 text-2xl font-bold">
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
          className="z-10 mx-auto rounded-full border-4 border-background-object bg-white px-7 py-3"
        >
          もっと見る
        </Link>
      </div>

      {/* vertical axis */}
      <div className="absolute left-1/2 top-0 z-0 h-full w-2 -translate-x-1/2 rounded-full bg-background-object"></div>
    </div>
  );
};
