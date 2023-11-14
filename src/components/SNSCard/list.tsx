import React from "react";
import { SNSCard } from ".";

export const SNSCardList = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5 px-4">
      <SNSCard snsName={"github"} id={"amatech-repo"} name={"GitHub"} />
      <SNSCard snsName={"x"} id={"amatech1006"} name={"X"} />
      <SNSCard snsName={"qiita"} id={"amatech1006"} name={"Qiita"} />
    </div>
  );
};
