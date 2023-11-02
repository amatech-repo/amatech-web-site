import React from "react";
import Image from "next/image";

export const SNSCard = () => {
  return (
    <div className="w-48 h-48 relative drop-shadow-lg ">
      <div className="w-24 h-24 bg-white flex flex-col justify-center items-center rounded-lg">
        <Image src={"./icons/github.svg"} alt="" width={32} height={32} />
        <div className="mt-2 text-primary font-bold">GitHub</div>
      </div>
    </div>
  );
};
