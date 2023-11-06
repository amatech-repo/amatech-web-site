import React from "react";
import { HoldingWeek } from "./holdingFormat";

export const WeekCard = ({ holdingWeek, dayOfWeek, text }: HoldingWeek) => {
  return (
    <div className="mx-auto rounded-3xl border-2 border-sky-100 bg-white px-16 py-8 font-bold">
      <div className="flex items-end justify-center">
        <div className="mr-1">
          <h5 className="text-xl">{holdingWeek}</h5>
        </div>
        <div className="ml-2">
          <h6 className="text-2xl text-amatech-log">{dayOfWeek}</h6>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-base text-gray">{text}</p>
      </div>
    </div>
  );
};
