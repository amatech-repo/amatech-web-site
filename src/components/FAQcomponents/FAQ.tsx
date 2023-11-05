import Image from "next/image";
import clsx from "clsx";

type Props = {
  q: string;
  a: string;
  emoji: string;
  flipped?: boolean;
};

export const FAQ = ({ q, a, emoji, flipped }: Props) => {
  return (
    <div
      className={clsx("flex gap-4", flipped ? "flex-row-reverse" : "flex-row")}
    >
      <div className="self-end text-5xl hidden sm:block">{emoji}</div>
      <div className="grow flex flex-col gap-2 bg-white p-6 rounded-3xl shadow-md text-sm sm:w-[60%] sm:grow-0">
        <div className="flex items-baseline gap-3">
          <div className="text-base">Q</div>
          <div className="font-semibold text-base text-amatech-log">{q}</div>
        </div>
        <div className="flex items-baseline gap-3.5">
          <div className="text-base">A</div>
          <div>{a}</div>
        </div>
      </div>
    </div>
  );
};
