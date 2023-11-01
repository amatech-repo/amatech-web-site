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
    <div className="flex items-center justify-center relative w-full h-full mb-10">
      <Image
        src={`./background/sections/${image}`}
        alt=""
        width={1}
        height={1}
        className="w-1/6 z-10"
      />
      <div className="text-title absolute z-20 text-center w-full">
        <div className="text-5xl font-bold">{title}</div>
        <div className="text-lg">{subtitle}</div>
      </div>
    </div>
  );
};
