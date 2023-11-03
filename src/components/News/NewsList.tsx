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
      {/* News Cards and Dots */}
      <div className="flex flex-col items-center relative z-10">
        {contents.map((newsCard: NewsType, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-5/6 mb-20 relative"
          >
            <div className="flex items-center mb-8 relative text-center w-full">
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

              {/* Date */}
              {index % 2 === 0 ? (
                <div
                  className="font-YuGothic font-bold text-2xl text-cyan-950 absolute"
                  style={{ right: "50%", marginRight: "32px" }}
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
              ) : (
                <div
                  className="font-YuGothic font-bold text-2xl text-cyan-950 absolute"
                  style={{ left: "50%", marginLeft: "32px" }}
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
              )}
            </div>

            {/* NewsCard */}
            <NewsCard
              title={newsCard.title}
              place={newsCard.place}
              imageURL={newsCard.imageURL.url ?? ""}
              isRight={true}
            />

            {/* もっと見るボタン */}
            {index === 2 ? (
              <div className="flex justify-center mt-32">
                <button className="w-full h-full bg-white rounded-full border-4 border-background-object px-7 py-3">
                  もっと見る
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>

      {/* Ziku image */}
      <Image
        src={"/icons/Ziku.svg"}
        alt=""
        width={10}
        height={10}
        className="absolute left-1/2 top-0  transform -translate-x-1/2 z-0 sm:h-[1300px]"
      />
    </div>
  );
};
