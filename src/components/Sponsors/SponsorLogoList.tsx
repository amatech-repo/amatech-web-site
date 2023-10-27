// Sponsors.tsx
import { SponsorListType } from "@/types/sponsor";
import { SponsorLogo } from "./SponsorLogo";

type SponsorListProps = {
  sponsors: SponsorListType | undefined;
};

export const SponsorLogoList = ({ sponsors }: SponsorListProps) => {
  // sponsors.contentsがundefinedの場合は空の配列を返す
  const contents = sponsors?.contents ?? [];

  return (
    <div className="flex flex-col sm:flex-row gap-[42px] items-center w-full">
      {contents.map((sponsor, index) => (
        <SponsorLogo key={index} ImagePath={sponsor.url?.url ?? undefined} />
      ))}
    </div>
  );
};
