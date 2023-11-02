import React from "react";
import Image from "next/image";
import Link from "next/link";

export const SNSCard = () => {
  return (
    <Link href="https://github.com/amatech-repo">
      <div className="w-48 h-48 relative drop-shadow-lg bg-white rounded-32">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <Image src={"./icons/github.svg"} alt="" width={76} height={76} />
          <div className="mt-2 text-primary font-bold text-xl">GitHub</div>
        </div>
      </div>
    </Link>
  );
};
