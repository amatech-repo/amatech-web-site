import Image from "next/image";

type Props = {
  imagePath1: string;
  imagePath2: string;
  imagePath3: string;
};
export const HomepageTop = ({ imagePath1, imagePath2, imagePath3 }: Props) => {
  const text: string = "エンジニアを目指すきっかけ　　　　";
  return (
    <div className="">
      <Image
        src={imagePath3}
        alt=""
        className="w-[1280px] h-[1230px]"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <div className="flex  ml-4 container">
        <div className="blur-[0px]">
          <div className=" text-neutral-900 text-[40px] pt-[40px] font-extrabold font-concept tracking-widest">
            どうせやるなら、
            <br />
            強くなろう。
          </div>
          <div className="w-[428px]">
            <span className="text-zinc-800 text-[14px] font-bold tracking-wide">
              あまてくは京都産業大学の学生を中心とした
            </span>
            <span className="text-sky-400 text-[14px] whitespace-pre-wrap font-bold tracking-wide">
              エンジニア　　　　コミュニティ
            </span>
            <span className="text-zinc-800 text-[14px] font-bold whitespace-pre-wrap tracking-wide">
              です。
              <br />
              <br />
              勉強会やLT会など、授業で触れる以外のプログラミング　　　　や技術のキャッチアップだけでなく、ハッカソン出場や　　　　　　チームメンバーの育成など
            </span>
            <span className="text-sky-400 text-[14px] font-bold whitespace-pre-wrap tracking-wide">
              {text}
            </span>
            <span className="text-zinc-800 text-[14px] font-bold  tracking-wide">
              になる活動を行なっています。
            </span>
          </div>
          <br />
          <div className="flex ml-40">
            <div className="text-sky-400 text-base font-bold tracking-wide mt-2 ml-20">
              もっと詳しく
            </div>
            <Image
              src={imagePath2}
              alt=""
              width={42}
              height={42}
              className="w-[42px] h-[42px]"
            />
          </div>
        </div>
        <div className="w-[674px] h-[483px] pr-auto pb-[50px]">
          <Image
            src={imagePath1}
            alt=""
            width={674}
            height={483}
            className="w-[674px] h-[483px]"
          />
        </div>
      </div>
    </div>
  );
};
