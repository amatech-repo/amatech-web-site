import React from "react";
import Image from "next/image";

export const Top = () => {
  return (
    <div className="flex items-center space-x-10">
      <div>
        <div className="text-neutral-900 text-[50px] font-extrabold font-['YuMincho'] tracking-widest">
          どうせやるなら、
          <br />
          強くなろう。
        </div>
        <div className="w-96 py-10">
          <div>
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
