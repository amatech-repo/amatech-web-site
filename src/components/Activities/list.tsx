import { Activity } from ".";

export const ActivityList = () => {
  return (
    <div className="z-10 flex flex-col gap-4 px-4 py-2 sm:px-0">
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
  );
};
