import { HoldingFormat } from "./holdingFormat";
import Image from "next/image";

export const HoldingFormatCard = (props: HoldingFormat) => {
  const { discordLogo, holdingFormat, image, place, time } = props;

  return (
    <div className="mx-auto flex w-full items-center justify-evenly rounded-3xl bg-white py-10 drop-shadow-lg odd:flex-row-reverse sm:flex-col sm:gap-6 sm:odd:flex-col">
      <div className="">
        <Image src={image} alt="" width={125} height={1} />
      </div>

      <div className="flex flex-col items-center">
        <p className="mb-2 text-sm font-semibold">{holdingFormat}</p>
        <div className="mx-auto mb-2 flex items-center justify-center space-x-2">
          {discordLogo && (
            <Image src={discordLogo} alt="Discord" width={32} height={32} />
          )}
          <p className="text-2xl font-semibold">{place}</p>
        </div>
        <p className="text-xl font-semibold text-amatech-log">{time}</p>
      </div>
    </div>
  );
};
