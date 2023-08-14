import React from "react";
import { HoldingWeek } from "./holdingFormat";

export const WeekCard = ({ holdingWeek, dayOfWeek, text }: HoldingWeek) => {
  return (
    <div className="max-w-3xl mx-auto drop-shadow-lg px-20 md:px-36 py-8 rounded-3xl font-bold">
      <div className="flex items-end justify-center font-concept">
        <div className="mr-1">
          <h5 className="text-xl">{holdingWeek}</h5>
        </div>
        <div className="ml-2">
          <h6 className="text-4xl text-amatech-log">{dayOfWeek}</h6>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-gray text-base">{text}</p>
      </div>
    </div>
  );
};
