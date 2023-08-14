import { HoldingFormat } from "./holdingFormat";
import Image from "next/image";

export const HoldingFormatCard = (props: HoldingFormat) => {
  const { discordLogo, holdingFormat, image, place, time } = props;

  return (
    <div className="flex flex-col items-center justify-end w-full py-14 mx-auto rounded-3xl drop-shadow-lg">
      <div className="mb-16">
        <Image src={image} alt="対面" width={125} height={1} />
      </div>

      <div className="flex flex-col items-center">
        <p className="text-base font-bold mb-4">{holdingFormat}</p>
        <div className="flex items-center space-x-2 justify-center mx-auto mb-2">
          {discordLogo && (
            <Image src={discordLogo} alt="対面" width={32} height={32} />
          )}
          <p className="text-2xl">{place}</p>
        </div>
        <p className="text-xl text-amatech-log">{time}</p>
      </div>
    </div>
  );
};
