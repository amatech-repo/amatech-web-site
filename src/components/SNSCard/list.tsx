import React from "react";
import { SNSCard } from ".";

export const SNSCardList = () => {
  return (
    <div className="flex sm:flex-row flex-col justify-center items-center gap-5">
      <SNSCard snsName={"github"} id={"amatech-repo"} name={"GitHub"} />
      <SNSCard snsName={"twitter"} id={"amatech1006"} name={"Twitter"} />
      <SNSCard snsName={"qiita"} id={"amatech1006"} name={"Qiita"} />
    </div>
  );
};
