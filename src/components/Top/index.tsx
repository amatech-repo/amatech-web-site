import React from "react";
import Image from "next/image";

export const Top = () => {
  return (
    <div className="flex flex-col justify-center items-center px-6">
      <div className="mx-12 mt-16 mb-14 drop-shadow-sm">
        <Image src="./logo/amatech.svg" alt="" width={680} height={680} />
      </div>

      <div className="max-w-full mx-6 flex flex-col gap-6 lg:mx-0">
        <div className="text-neutral-900 font-extrabold text-[9.4vw] leading-normal  lg:text-6xl lg:leading-snug">
          どうせやるなら、
          <br />
          強くなろう。
        </div>
        <div className="leading-normal space-y-4 text-sm">
          <div className="whitespace-pre">
            あまてくは京都産業大学の学生を中心とした
            <wbr />
            <span className="text-amatech-log">エンジニアコミュニティ</span>
            です。
          </div>
          <div>
            勉強会やLT会など、授業で触れる以外のプログラミングや技術のキャッチアップだけでなく、ハッカソン出場やチームメンバーの育成などエンジニアを目指すきっかけになる活動を行なっています。
          </div>
        </div>
      </div>
    </div>
  );
};
