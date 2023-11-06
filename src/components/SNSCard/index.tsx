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
    <Link href={"https://" + snsName + ".com/" + id}>
      <div className="relative h-48 w-48 rounded-32 bg-white drop-shadow-lg">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <Image
            src={"/icons/" + snsName + ".svg"}
            alt=""
            width={76}
            height={76}
          />
          <div className="text-primary mt-2 text-xl font-bold">{name}</div>
        </div>
      </div>
    </Link>
  );
};
