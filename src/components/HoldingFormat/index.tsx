import { HoldingFormatCard } from "./HoldingFormatCard";
import { WeekCard } from "./WeekCard";

export const HoldingFormat = () => {
  return (
    <div className="px-4 py-2 sm:px-0">
      <div className="mb-4">
        <WeekCard
          holdingWeek="毎週"
          dayOfWeek="金曜日"
          text="対面・オンラインで毎週交互に開催しています！"
        />
      </div>
      <div className="flex flex-col gap-4 sm:flex-row mb-4">
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
    </div>
  );
};
