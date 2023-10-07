import { HoldingFormatCard } from "./HoldingFormatCard";
import { WeekCard } from "./WeekCard";

export const HoldingFormat = () => {
  return (
    <div className="px-4 py-2 sm:px-0">
      <div className="mb-4">
        <WeekCard
          holdingWeek="毎週"
          dayOfWeek="月曜日"
          text="対面・オンラインで毎週交互に開催しています！"
        />
      </div>
      <div className="flex flex-col sm:flex-row sm:space-x-4 mb-4">
        <div className="flex-grow sm:flex-grow-0 mb-4 sm:mb-0 w-full sm:min-w-[300px]">
          <HoldingFormatCard
            holdingFormat="対面"
            image="./icons/study.svg"
            place="学内の教室"
            time="4限・5限"
          />
        </div>
        <div className="flex-grow sm:flex-grow-0 w-full sm:min-w-[300px]">
          <HoldingFormatCard
            discordLogo="./icons/discord.svg"
            holdingFormat="オンライン"
            image="./icons/online.svg"
            place="Discord"
            time="21:00~"
          />
        </div>
      </div>
    </div>
  );
};
