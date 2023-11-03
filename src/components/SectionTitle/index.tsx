import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  subtitle: string;
  image: ImageSize;
};

export enum ImageSize {
  small = "small.svg",
  medium = "medium.svg",
  large = "large.svg",
}

export const SectionTitle = (props: Props) => {
  const { title, subtitle, image } = props;

  return (
    <div className="flex items-center justify-center relative w-full h-full mb-14">
      <Image
        src={`./background/sections/${image}`}
        alt=""
        width={288}
        height={288}
        className="z-10"
      />
      <div className="text-title absolute z-20 text-center w-full">
        <div className="text-5xl font-bold">{title}</div>
        <div className="text-lg mt-3">{subtitle}</div>
      </div>
    </div>
  );
};
