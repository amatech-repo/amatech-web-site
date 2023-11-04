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
    <div className="shadow bg-white md:rounded-3xl flex flex-col w-full overflow-hidden md:flex-row-reverse z-10">
      <div className="h-40 w-full min-h-full relative overflow-hidden bg-neutral-50">
        <Image src={imageURL} width={800} height={800} alt="" />
      </div>
      <div className="flex flex-col gap-3 justify-between p-6">
        <div className="text-lg font-semibold">{title}</div>
        <div className="flex items-center text-neutral-400 text-sm gap-1 -ml-1">
          <Image
            src={"./images/mapping.svg"}
            alt="Mapping icon"
            width={18}
            height={18}
          />
          <div className="">{place}</div>
        </div>
      </div>
    </div>
  );
};
