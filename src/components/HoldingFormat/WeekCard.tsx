import React from "react";
import { HoldingWeek } from "./holdingFormat";

export const WeekCard = ({ holdingWeek, dayOfWeek, text }: HoldingWeek) => {
  return (
    <div className="max-w-3xl mx-auto sm:mx-4 shadow-md px-20 md:px-36 py-8 rounded-3xl font-bold">
      <div className="flex items-end justify-center">
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
