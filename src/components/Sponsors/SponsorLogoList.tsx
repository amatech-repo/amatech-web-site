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
    <div className="flex w-full flex-row flex-wrap items-center justify-center gap-4 px-4 sm:gap-6">
      {contents.map((sponsor, index) => (
        <SponsorLogo key={index} ImagePath={sponsor.url?.url ?? undefined} />
      ))}
    </div>
  );
};
