// Sponsors.tsx
import { SponsorLogo } from "./SponsorLogo";

type SponsorLogo = {
  imagePath: string;
};

type Sponsors = {
  sponsors: SponsorLogo[];
};

export const SponsorLogoList = ({ sponsors }: Sponsors) => {
  return (
    <div className="flex gap-[42px]">
      {sponsors.map((sponsor, index) => (
        <SponsorLogo key={index} imagePath={sponsor.imagePath} />
      ))}
    </div>
  );
};
