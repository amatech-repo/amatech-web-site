import { Activity } from ".";
import Image from "next/image";

export const ActivityList = () => {
  return (
    <div className="relative">
      {/* Ziku image */}
      <Image
        src={"./icons/Ziku.svg"}
        alt={""}
        width={10}
        height={10}
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 sm:h-[1100px] h-[1500px]"
      />

      {/* Activities */}
      <div className="z-10 px-4 py-2 sm:px-0">
        <Activity
          imagePath={"./icons/memo.svg"}
          title={"勉強会・LT会"}
          texts={[
            "インターンに参加してきた話",
            "研究って何するの？",
            "学びたい言語についての勉強会",
            "逆求人イベントの使い道とススメ",
          ]}
        />
        <Activity
          imagePath={"./icons/mac.svg"}
          title={"イベント参加"}
          texts={[
            "ハッカソン",
            "エンジニアサークル交流会",
            "外部勉強会",
            "外部LT会登壇",
          ]}
        />
        <Activity
          imagePath={"./icons/profile.svg"}
          title={"就活相談"}
          texts={[
            "おすすめのエージェントの紹介",
            "就活に必要なことの情報共有",
            "お互いにES添削・面接練習",
            "自己分析のブラッシュアップ",
          ]}
        />
      </div>
    </div>
  );
};
