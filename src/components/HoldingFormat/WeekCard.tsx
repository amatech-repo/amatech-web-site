import React from "react";
import { HoldingWeek } from "./holdingFormat";

export const WeekCard = ({ holdingWeek, dayOfWeek, text }: HoldingWeek) => {
  return (
    <div className="w-full mx-auto shadow-xl px-36 py-8 rounded-3xl">
      <div className="flex items-center justify-center">
        <div className="mr-2">
          <h5 className="text-xl">{holdingWeek}</h5>
        </div>
        <div className="ml-2">
          <h6 className="text-4xl text-amatech-log">{dayOfWeek}</h6>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-gray">{text}</p>
      </div>
    </div>
  );
};
