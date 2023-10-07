// Sponsors.tsx
import { SponsorListType } from "@/types/sponsor";
import { SponsorLogo } from "./SponsorLogo";

type SponsorListProps = {
  sponsors: SponsorListType | undefined;
};

export const SponsorLogoList = ({ sponsors }: SponsorListProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-[42px] items-center w-full">
      {sponsors?.contents.map((sponsor, index) => (
        <SponsorLogo
          key={index}
          ImagePath={sponsor.url?.url ? sponsor.url.url : undefined}
        />
      ))}
    </div>
  );
};
