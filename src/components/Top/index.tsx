"use client";

import React, { ReactNode } from "react";
import Image from "next/image";
import Tilt, { OnMoveParams } from "react-parallax-tilt";

export const Top = () => {
  // 偽ロゴのスタイルを本ロゴに適用する
  function transportStyles(tilt: OnMoveParams) {
    const logoWrapper = document.getElementById("top--logo-wrapper");

    if (tilt.eventType === "autoreset") {
      logoWrapper?.setAttribute("style", "");
      return;
    }

    const dummyLogoWrapper = document.getElementById(
      "top--dummy-logo-img"
    )?.parentElement;

    if (dummyLogoWrapper && logoWrapper) {
      const style = dummyLogoWrapper.getAttribute("style");
      logoWrapper.setAttribute("style", style ? style : "");
    }
  }

  return (
    <div className="flex flex-col justify-center items-center px-6 sm:px-0 sm:grid sm:grid-cols-12 sm:h-[calc(100vh-64px)] sm:grid-rows-1 ">
      {/* Logo */}
      <div
        id="top--logo-wrapper"
        className="mx-12 mt-16 mb-14 sm:m-0 sm:row-start-1 sm:col-start-6 sm:col-span-6 select-none will-change-transform transition-transform duration-700 ease-in-out lg:ml-6 lg:mt-32"
      >
        <LogoImage />
      </div>
      {/* Dummy Logo */}
      <Tilt
        className="mx-12 mt-16 mb-14 sm:m-0 sm:row-start-1 sm:col-start-6 sm:col-span-6 select-none z-40 opacity-0 lg:ml-6 lg:mt-32"
        gyroscope
        onMove={(tilt) => {
          transportStyles(tilt);
        }}
        tiltMaxAngleX={30}
        tiltMaxAngleY={30}
      >
        <LogoImage isDummy />
      </Tilt>

      {/* Wave */}
      <div className="relative hidden sm:block sm:row-start-1 sm:col-span-full sm:h-[calc(100vh-64px)] select-none ">
        <Image src="./background/wave.svg" width={2000} height={1276} alt="" />
      </div>

      {/* Text */}
      <div className="max-w-full mx-6 flex flex-col gap-10 z-20 lg:mx-0 sm:col-start-2 sm:col-span-4 sm:row-start-1">
        <div className="text-neutral-900 font-extrabold text-[9.4vw] whitespace-nowrap leading-normal sm:text-4xl sm:leading-snug md:text-5xl lg:text-6xl lg:leading-snug font-concept lg:mt-10">
          どうせやるなら、
          <br />
          強くなろう。
        </div>
        <div className="leading-6 space-y-4 text-sm max-w-[27rem] font-semibold text-neutral-500">
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
    </div>
  );
};

const LogoImage = (isDummy: { isDummy?: boolean }) => {
  return (
    <Image
      src="./logo/amatech.svg"
      id={isDummy.isDummy ? "top--dummy-logo-img" : ""}
      alt=""
      width={1200}
      height={1200}
      className="drop-shadow-md"
    />
  );
};
