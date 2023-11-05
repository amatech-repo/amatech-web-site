import React from "react";
import { HoldingWeek } from "./holdingFormat";

export const WeekCard = ({ holdingWeek, dayOfWeek, text }: HoldingWeek) => {
  return (
    <div className="mx-auto border-2 border-sky-100 px-16 py-8 rounded-3xl font-bold bg-white">
      <div className="flex items-end justify-center">
        <div className="mr-1">
          <h5 className="text-xl">{holdingWeek}</h5>
        </div>
        <div className="ml-2">
          <h6 className="text-2xl text-amatech-log">{dayOfWeek}</h6>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-gray text-base">{text}</p>
      </div>
    </div>
  );
};
