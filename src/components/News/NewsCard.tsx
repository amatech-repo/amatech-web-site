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
    <>
      <div className="w-[45rem]  mt-4 mb-8">
        <div className="flex flex-row shadow-lg rounded-md  border-spacing-1 border-black bg-slate-50">
          <Image src={imageURL} alt="" width={245} height={150}></Image>
          <div className="ml-6 mt-3">
            <div className="text-2xl font-bold mb-2">{title}</div>
            <div className="flex flex-row">
              <Image
                src={"./images/mapping.svg"}
                alt=""
                width={24}
                height={24}
              />
              <div className="text-neutral-400">{place}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
