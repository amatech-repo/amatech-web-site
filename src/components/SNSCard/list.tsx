import React from "react";
import { SNSCard } from ".";

export const SNSCardList = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
      <SNSCard snsName={"github"} id={"amatech-repo"} name={"GitHub"} />
      <SNSCard snsName={"twitter"} id={"amatech1006"} name={"Twitter"} />
      <SNSCard snsName={"qiita"} id={"amatech1006"} name={"Qiita"} />
    </div>
  );
};
