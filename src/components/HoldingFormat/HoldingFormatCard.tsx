import { HoldingFormat } from "./holdingFormat";
import Image from "next/image";

export const HoldingFormatCard = (props: HoldingFormat) => {
  const { discordLogo, holdingFormat, image, place, time } = props;

  return (
    <div className="flex odd:flex-row-reverse sm:flex-col sm:odd:flex-col items-center justify-evenly w-full py-10 mx-auto rounded-3xl drop-shadow-lg bg-white sm:gap-6">
      <div className="">
        <Image src={image} alt="" width={125} height={1} />
      </div>

      <div className="flex flex-col items-center">
        <p className="text-sm font-semibold mb-2">{holdingFormat}</p>
        <div className="flex items-center space-x-2 justify-center mx-auto mb-2">
          {discordLogo && (
            <Image src={discordLogo} alt="Discord" width={32} height={32} />
          )}
          <p className="text-2xl font-semibold">{place}</p>
        </div>
        <p className="text-xl text-amatech-log font-semibold">{time}</p>
      </div>
    </div>
  );
};
