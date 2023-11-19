import Image from "next/image";
import clsx from "clsx";

export type FAQType = {
  q: React.ReactNode;
  a: React.ReactNode;
  emoji: string;
  flipped?: boolean;
};

export const FAQ = ({ q, a, emoji, flipped }: FAQType) => {
  return (
    <div
      className={clsx("flex gap-4", flipped ? "flex-row-reverse" : "flex-row")}
    >
      <div className="hidden self-end text-5xl sm:block">{emoji}</div>
      <div className="flex grow flex-col gap-2 rounded-3xl bg-white p-6 text-sm shadow-md sm:w-[60%] sm:grow-0">
        <div className="flex items-baseline gap-3">
          <div className="text-base lg:text-lg">Q</div>
          <div className="text-base font-semibold text-amatech-log lg:text-lg">
            {q}
          </div>
        </div>
        <div className="flex items-baseline gap-3.5">
          <div className="text-base">A</div>
          <div className="font-semibold leading-normal text-slate-700">{a}</div>
        </div>
      </div>
    </div>
  );
};
