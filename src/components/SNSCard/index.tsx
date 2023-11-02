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
      <div className="w-48 h-48 relative drop-shadow-lg bg-white rounded-32">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <Image
            src={"/icons/" + snsName + ".svg"}
            alt=""
            width={76}
            height={76}
          />
          <div className="mt-2 text-primary font-bold text-xl">{name}</div>
        </div>
      </div>
    </Link>
  );
};
