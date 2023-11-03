import React from "react";
import Image from "next/image";

interface Props {
  title: string;
  place: string;
  imageURL: string;
  isRight: boolean;
}

export const NewsCard = (props: Props) => {
  const { title, place, imageURL, isRight } = props;

  return (
    <div
      className={`w-5/6 mt-4 mb-8 ${
        isRight ? "md:flex-row-reverse" : "md:flex-row"
      } flex flex-col md:flex-row bg-news-background rounded-3xl shadow-lg overflow-hidden`}
    >
      <div className="relative w-full md:w-1/3 mb-4 md:mb-0">
        <Image
          src={imageURL}
          width={245}
          height={150}
          alt=""
          // TODO: ClipPathを使って画像の内側を丸く凹ませる
        />
      </div>
      <div className="w-full md:w-2/3 p-6">
        <div className="text-2xl font-bold mb-4">{title}</div>
        <div className="flex flex-row items-center">
          <Image
            src={"./images/mapping.svg"}
            alt="Mapping icon"
            width={24}
            height={24}
          />
          <div className="text-neutral-400 ml-4">{place}</div>
        </div>
      </div>
    </div>
  );
};
