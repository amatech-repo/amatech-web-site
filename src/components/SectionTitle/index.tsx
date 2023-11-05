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
      className="relative mb-10 flex items-center justify-center"
      id={props.id}
    >
      <Image
        src={`./background/sections/${image}`}
        alt=""
        width={288}
        height={288}
        className="z-10"
      />
      <div className="absolute z-20 w-full text-center text-title">
        <div className="relative mx-auto w-fit font-title text-4xl font-bold sm:text-6xl">
          <div className="z-10">{title}</div>
          <div className="absolute -right-0.5 left-0.5 top-0.5 -z-10 text-white drop-shadow-md sm:-right-1 sm:left-1 sm:top-1">
            {title}
          </div>
        </div>
        <div className="mt-1 text-sm font-semibold text-slate-400 sm:mt-3">
          {subtitle}
        </div>
      </div>
    </div>
  );
};
