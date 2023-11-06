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

    const dummyLogoWrapper = document.getElementById("top--dummy-logo-img")
      ?.parentElement;

    if (dummyLogoWrapper && logoWrapper) {
      const style = dummyLogoWrapper.getAttribute("style");
      logoWrapper.setAttribute(
        "style",
        style ? style + ";animation:none;" : "",
      );
    }
  }

  return (
    <div className="flex flex-col items-center justify-center px-6 sm:grid sm:h-[calc(100vh-64px)] sm:grid-cols-12 sm:grid-rows-1 sm:px-0 ">
      {/* Logo */}
      <div
        id="top--logo-wrapper"
        className="mx-12 mb-14 mt-16 hidden animate-top-logo select-none transition-transform duration-700 ease-in-out will-change-transform sm:col-span-6 sm:col-start-6 sm:row-start-1 sm:m-0 sm:block lg:ml-6 lg:mt-32"
      >
        <LogoImage />
      </div>
      {/* Dummy Logo */}
      <Tilt
        className="z-40 mx-12 mb-14 mt-16 select-none sm:col-span-6 sm:col-start-6 sm:row-start-1 sm:m-0 sm:opacity-0 lg:ml-6 lg:mt-32"
        gyroscope
        onMove={(tilt) => {
          transportStyles(tilt);
        }}
        tiltMaxAngleX={30}
        tiltMaxAngleY={30}
        perspective={800}
      >
        <LogoImage isDummy />
      </Tilt>

      {/* Wave */}
      <div className="relative hidden select-none sm:col-span-full sm:row-start-1 sm:block sm:h-[calc(100vh-64px)] ">
        <Image src="./background/wave.svg" width={2000} height={1276} alt="" />
      </div>

      {/* Text */}
      <div className="z-20 mx-6 flex max-w-full flex-col gap-10 sm:col-span-4 sm:col-start-2 sm:row-start-1 lg:mx-0">
        <div className="whitespace-nowrap font-concept text-[9.4vw] font-extrabold leading-normal text-neutral-900 sm:text-4xl sm:leading-snug md:text-5xl lg:mt-10 lg:text-6xl lg:leading-snug">
          どうせやるなら、
          <br />
          強くなろう。
        </div>
        <div className="max-w-[27rem] space-y-4 text-sm font-semibold leading-6 text-neutral-500">
          <div>
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
