import React from "react";
import { SNS } from "./index";

type SNS = {
  snsImagePath: string;
  snsLink: string;
  alt: string;
};

type SNSs = {
  snss: SNS[];
};

export const SNSList = ({ snss }: SNSs) => {
  return (
    <div className="flex gap-[42px]">
      {snss.map((sns, index) => (
        <SNS
          key={index}
          snsImagePath={sns.snsImagePath}
          snsLink={sns.snsLink}
          alt={sns.alt}
        />
      ))}
    </div>
  );
};
