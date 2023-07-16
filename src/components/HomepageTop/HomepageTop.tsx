import Image from "next/image";

type Props = {
  imagePath1: string;
  imagePath2: string;
  imagePath3: string;
};
export const HomepageTop = ({ imagePath1, imagePath2, imagePath3 }: Props) => {
  return (
    <div>
      <Image
        src={imagePath3}
        alt=""
        className="w-[1318px] h-[1270px]"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <div className="w-[1280px] h-[825px]  blur-[0px] flex place-content-center ml-4">
        <div>
          <div className="text-neutral-900 text-[50px] font-extrabold font-concept tracking-widest">
            どうせやるなら、
            <br />
            強くなろう。
          </div>
          <div className="w-[428px]">
            <span className="text-zinc-800 text-base font-bold tracking-wide">
              あまてくは京都産業大学の学生を中心とした
            </span>
            <span className="text-sky-400 text-base font-bold tracking-wide">
              エンジニアコミュニティ
            </span>
            <span className="text-zinc-800 text-base font-bold tracking-wide">
              です。
              <br />
              <br />
              勉強会やLT会など、授業で触れる以外のプログラミングや技術のキャッチアップだけでなく、ハッカソン出場やチームメンバーの育成など
            </span>
            <span className="text-sky-400 text-base font-bold tracking-wide">
              エンジニアを目指すきっかけ
            </span>
            <span className="text-zinc-800 text-base font-bold tracking-wide">
              になる活動を行なっています。
            </span>
          </div>
          <br />
          <div className="flex ml-auto">
            <div className="text-sky-400 text-base font-bold tracking-wide mt-2 ml-auto">
              もっと詳しく
            </div>
            <Image
              src={imagePath2}
              alt=""
              width={42}
              height={42}
              className="w-[42px] h-[42px] relative"
            />
          </div>
        </div>
        <Image
          src={imagePath1}
          alt=""
          width={674}
          height={483}
          className="w-[673px] h-[483px] p-4"
        />
      </div>
    </div>
  );
};
