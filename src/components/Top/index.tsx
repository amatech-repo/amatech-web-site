import React from "react";
import Image from "next/image";

export const Top = () => {
  return (
    <div className="flex flex-col items-center space-x-10 lg:flex-row">
      <div className="mt-[5rem]">
        <div className="text-neutral-900 text-[50px] font-extrabold font-['YuMincho'] tracking-widest">
          どうせやるなら、
          <br />
          強くなろう。
        </div>
        <div className="w-[27rem] py-10 text-lg">
          <div className="pb-5">
            あまてくは京都産業大学の学生を中心とした
            <span className="text-amatech-log">エンジニアコミュニティ</span>
            です。
          </div>
          <div>
            勉強会やLT会など、授業で触れる以外のプログラミングや技術のキャッチアップだけでなく、ハッカソン出場やチームメンバーの育成などエンジニアを目指すきっかけになる活動を行なっています。
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Image src="./logo/amatech.svg" alt="" width={680} height={680} />
      </div>
    </div>
  );
};
