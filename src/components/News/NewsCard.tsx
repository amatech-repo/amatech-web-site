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
    <div className="z-10 flex w-full flex-col overflow-hidden bg-white shadow md:flex-row-reverse md:justify-between md:rounded-3xl">
      <div className="relative h-40 min-h-full w-full overflow-hidden bg-neutral-50 md:w-1/3">
        <Image src={imageURL} width={800} height={800} alt="" />
      </div>
      <div className="flex flex-col justify-between gap-3 p-6 md:w-2/3 md:p-10">
        <div className="text-lg font-semibold">{title}</div>
        <div className="-ml-1 flex items-center gap-1 text-sm text-neutral-400">
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
