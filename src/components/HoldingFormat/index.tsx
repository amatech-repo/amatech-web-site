import { HoldingFormatCard } from "./HoldingFormatCard";
import { WeekCard } from "./WeekCard";

export const HoldingFormat = () => {
  return (
    <div>
      <WeekCard
        holdingWeek="毎週"
        dayOfWeek="月曜日"
        text="対面・オンラインで毎週交互に開催しています！"
      />
      <HoldingFormatCard />
    </div>
  );
};
