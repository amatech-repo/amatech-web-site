import React from "react";
import Image from "next/image";

type Props = {
  id?: string;
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
    <div
      className="flex items-center justify-center relative mb-10"
      id={props.id}
    >
      <Image
        src={`./background/sections/${image}`}
        alt=""
        width={288}
        height={288}
        className="z-10"
      />
      <div className="text-title absolute z-20 text-center w-full">
        <div className="text-4xl sm:text-5xl font-bold">{title}</div>
        <div className="mt-1 text-sm sm:mt-3 font-semibold text-slate-400">
          {subtitle}
        </div>
      </div>
    </div>
  );
};
