import { HoldingFormatCard } from "./HoldingFormatCard";
import { WeekCard } from "./WeekCard";

export const HoldingFormat = () => {
  return (
    <>
      <WeekCard
        holdingWeek="毎週"
        dayOfWeek="月曜日"
        text="対面・オンラインで毎週交互に開催しています！"
      />
      <div className="flex space-x-4 my-4">
        <HoldingFormatCard
          holdingFormat="対面"
          image="./icons/study.svg"
          place="学内の教室"
          time="4限・5限"
        />
        <HoldingFormatCard
          discordLogo="./icons/discord.svg"
          holdingFormat="オンライン"
          image="./icons/online.svg"
          place="Discord"
          time="21:00~"
        />
      </div>
    </>
  );
};
