import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  snsName: string; // url, svgに使用
  id: string; // snsID
  name: string; // SNS名
};

export const SNSCard = (props: Props) => {
  const { snsName, id, name } = props;
  return (
    <Link
      href={"https://" + snsName + ".com/" + id}
      target="_blank"
      className="flex h-36 w-36 flex-col items-center justify-center rounded-3xl bg-white p-6 shadow-md md:h-52 md:w-52 md:gap-2 md:rounded-32 md:p-8"
    >
      <div className="relative h-20 w-20">
        <Image src={"/icons/" + snsName + ".svg"} alt={snsName} fill />
      </div>
      <div className="mt-2 text-xl font-bold">{name}</div>
    </Link>
  );
};
