import React from "react";
import Image from "next/image";

export const SectionTitle = () => {
  return (
    <div className="flex items-center justify-center relative w-full h-full">
      <Image
        src="./background/sections/small.svg"
        alt=""
        width={1}
        height={1}
        className="w-1/6 z-10"
      />
      <div className="text-title absolute z-20 text-center w-full">
        <div className="text-5xl font-bold">Admin</div>
        <div className="text-lg">運営メンバー</div>
      </div>
    </div>
  );
};
