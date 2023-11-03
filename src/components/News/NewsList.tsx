import { NewsCard } from "./NewsCard";
import Image from "next/image";
import { NewsListType, NewsType } from "@/types/news";

type NewsCardListProps = {
  newsCards: NewsListType | undefined;
};

export const NewsList = ({ newsCards }: NewsCardListProps) => {
  const contents = newsCards?.contents ?? [];
  return (
    <div className="relative w-full">
      <div className="flex flex-col items-center relative z-10">
        {contents.map((newsCard: NewsType, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-5/6 mt-14 mb-20 relative"
          >
            <div className="flex items-center mb-8 relative text-center w-full">
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <Image src={"/images/dot.svg"} alt="" width={28} height={28} />
              </div>

              <div
                className={`font-YuGothic font-bold text-2xl text-cyan-950 absolute ${
                  index % 2 === 0 ? "right-1/2 mr-8" : "left-1/2 ml-8"
                }`}
              >
                <span>
                  {newsCard.eventDate
                    .split("T")[0]
                    .split("-")
                    .slice(1)
                    .join("/")}
                </span>
                <Image
                  src={"/images/polygon.svg"}
                  alt=""
                  width={28}
                  height={28}
                  className="relative top-6 left-1/4"
                />
              </div>
            </div>

            <NewsCard
              title={newsCard.title}
              place={newsCard.place}
              imageURL={newsCard.imageURL.url ?? ""}
              isRight={index % 2 === 0}
            />

            {index === contents.length - 1 ? (
              <div className="flex justify-center mt-24">
                <button className="bg-white rounded-full border-4 border-background-object px-7 py-3">
                  もっと見る
                </button>
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <Image
        src={"/icons/Ziku.svg"}
        alt=""
        width={10}
        height={10}
        className="absolute left-1/2 top-0 transform -translate-x-1/2 z-0  md:h-[1300px] h-[2000px]"
      />
    </div>
  );
};
